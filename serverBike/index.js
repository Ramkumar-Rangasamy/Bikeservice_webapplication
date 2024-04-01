//inbulided package imported
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const database = require('mysql');


// import packages Using area in ( use keyword )
const app = express();

app.use(cors());
app.use(fileupload());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('puublic'));


//database connection
let db = database.createConnection({
    host : "localhost",
    user : "root",
    password :"root",
    database :"bike_service_Application"
});

//database connected or  not in checking if connition
db.connect((er)=>{

    if(er){
         console.log(er); 
    }
    else{
          console.log("Database is Connected! Successfully");
    }
});


        //customerInformation details
// This is post method api and calling in Customer Information for customerInfo 
//table and this api new user comming

app.post('/newuser',(req,res)=>{

    let {customerName,city,emailId,phoneNumber}=req.body;

    db.query('insert into customerInfo(customerName,city,emailId,phoneNumber,status,effectiveFrom,effectiveTo,createdBy,createdOn) values(?,?,?,?,"A",current_date(),current_date(),"admin",current_timestamp());',
   
        [customerName,city,emailId,phoneNumber],(err,result)=>{
            if(err){
                let meg={ "status":"error",
                          "message":"error"
                        };
                console.log(err);
                res.send(meg);
            }
            else{
                let meg={"status":"succes"};
                res.send(meg);
            }
        }
    ) 
});



//this is GET method is used to retrieve information  

app.get("/getuser", (req, res) => {
    var sql = "select * from customerInfo";
      db.query(sql,(error,result)=> {

        if(error){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
      });
});



// this a put method and using in Update the Records in customerInfo table 

app.put("/updatecustomerInfo/:customerId",(req,res)=>{
    const sql='update customerInfo set customerName=?,city=?,emailId=?,phoneNumber=? where customerId=?';
    const id=req.params.customerId;
    const{customerName,city,emailId,phoneNumber}=req.body;
    db.query(sql,[customerName,city,emailId,phoneNumber,id],(err,result)=>{

        if(err){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
    })
})



  //this is delete method using in Delete the Records  selected by id 

  app.delete("/deletecustomerInfo/:customerId", (req, res) => {
    let sql = "DELETE FROM customerInfo WHERE customerId= "+ req.params.customerId +" ";
    let deletecheck = db.query(sql, (err,result) => {
        if(err){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
    });
  });



        //Booking Information details 
  // This is post method api and calling in booking Information for bookingInfo 
//table and this api new user comming

app.post('/newbooking',(req,res)=>{

    let {customerId,bookingDate,services}=req.body;

    db.query('insert into bookingInfo(customerId,bookingDate,services,status,effectiveFrom,effectiveTo,createdBy,createdOn) values(?,?,?,"A",current_date(),current_date(),"admin",current_timestamp());',
   
        [customerId,bookingDate,services],(err,result)=>{
            if(err){
                let meg={ "status":"error",
                          "message":"error"
                        };
                console.log(err);
                res.send(meg);
            }
            else{
                let meg={"status":"succes"};
                res.send(meg);
            }
        }
    ) 

});


//this is GET method is used to retrieve information  

app.get("/getbooking", (req, res) => {
    var sql = "select * from bookingInfo";
      db.query(sql,(error,result)=> {

        if(error){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
      });
});


// this a put method and using in Update the Records in bookingInfo table 

app.put("/updatebookingInfo/:bookingId",(req,res)=>{
    const sql='update bookingInfo set customerId=?,bookingDate=?,services=? where bookingId=?';
    const id=req.params.bookingId;
    const{customerId,bookingDate,services}=req.body;
    db.query(sql,[customerId,bookingDate,services,id],(err,result)=>{

        if(err){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
    })
})



  //this is delete method using in Delete the Records  selected by id 

  app.delete("/deletebookingInfo/:bookingId", (req, res) => {
    let sql = "DELETE FROM bookingInfo WHERE bookingId= "+ req.params.bookingId +" ";
    let deletecheck = db.query(sql, (err,result) => {
        if(err){
            let meg={ "status":"error",
                      "message":"error"
                    };
            console.log(err);
            res.send(meg);
        }
        else{
            res.send({ status: true,
                       data: result 
                    });
        }
    });
  });



  // Server  listening server and  port number in last
app.listen(4040,()=>{
    console.log("Server is Running in 4040 http://localhost:4040 Successfully Running !");
})