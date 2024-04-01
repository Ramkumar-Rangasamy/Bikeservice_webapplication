//import react
import {useState,useEffect} from 'react';
//css import
import './user.css';
//import axios
import axios from "axios";
import { Booking } from '../booking/Booking';



//Using function components
export function User(){

    const [customerName,setcustomerName]=useState("")
    const [city,setcity]=useState("")
    const [emailId,setemailId]=useState("")
    const [phoneNumber,setphoneNumber]=useState(0)


    const addnewuser =()=>{
        axios.post("http://localhost:4040/newuser",{
                customerName:customerName,
                city:city,
                emailId:emailId,
                phoneNumber:phoneNumber
            }).then(()=>alert('Signup SuccessFully'))
    }
      
    
     const [data, setData] = useState([]);

     useEffect(() => {
         axios.get("http://localhost:4040/getuser")
             .then(res => setData(res.data))
             .catch(err => console.log(err));
     },[])
 


    return(
     <>
        <div className='main-form'>
            <div className='division-main'>
             <h1>Bike services Application</h1>
                <form className='form-group form-css' onSubmit={addnewuser} >
                    <h2>Registration_Details</h2>
                    <div>
                    <label>Name </label>
                    <input type='text' name='customerName'className='form-control'onChange={(event)=>setcustomerName(event.target.value)} placeholder=' Name'/>
                    </div>
                    <div>
                    <label>CityName</label>
                    <input type='text' name='city' className='form-control'onChange={(event)=>setcity(event.target.value)}   placeholder=' City'/>
                    </div>
                    <div>
                    <label>emailId </label>
                    <input type='email' name='emailId' className='form-control'onChange={(event)=>setemailId(event.target.value)}  placeholder=' Email'/>
                    </div>
                    <div>
                    <label>Number</label>
                    <input type='number' name='phoneNumber' className='form-control' onChange={(event)=>setphoneNumber(event.target.value)} placeholder=' Number'/>
                    </div>
                    <button type='submit' className='btn btn-success m-3'>ADD CUSTOMER</button>       
                </form>
                
            </div>
        </div>
            <div className='division'>
                 
                <div>
                    <h2>Show Customer</h2>
                    <button  className='btn btn-success m-3'>SHOW ALL USER</button>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>CustomerName</th>
                            <th>City</th>
                            <th>EmailId</th>
                            <th>phoneNumber</th>
                        </tr>
                        </thead>
                        <tbody>
                          {data.map((value,index)=>{
                            return <tr>
                                <td>{value.ID}</td>
                                <td>{value.customerName}</td>
                                <td>{value.city}</td>
                                <td>{value.emailId}</td>
                                <td>{value.phoneNumber}</td>
                            </tr> 
                          })}
                        </tbody>
                    </table>
                </div> 
            </div>
             
       
        
       <Booking/>


     </>
    );
}