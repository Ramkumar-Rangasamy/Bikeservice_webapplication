import {useState,useEffect} from 'react';
import axios from "axios";
import img3 from './images/ktm-bike-background-zodhj1hjn6pp6dww.jpg';
import './booking.css';
// const nodemailer = require('nodemailer');

export function Booking(){

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'always.ramkumar7@gmail.com',
  //     pass: 'Ramkumar@1031',
  //   },
  // });
   
  // const sendEmail = async () => {
  //   try {
  //     const info = await transporter.sendMail({
  //       from: 'always.ramkumar7@gmail.com', // Sender address
  //       to: 'ramkumar.rangaraj7@gmail.com', // List of recipients
  //       subject: 'booking over', // Subject line
  //       text: 'Hello,this mail in only booking people and thankyou',
       
  //     });
  
  //     console.log('Email sent:', info.messageId);
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };
  
 
  

  const [customerId,setcustomerId]=useState(0)
  const [bookingDate,setbookingDate]=useState(Date)
  const [services,setservices]=useState("")



  const newbooking =()=>{
      axios.post("http://localhost:4040/newbooking",{
              customerId:customerId,
              bookingDate:bookingDate,
              services:services
          }).then(()=>alert('Signup SuccessFully'))
  }

    return(
        <>
         <div>
            
            <div className='main-form-two'>
              <div className='division-main'>
              <h1>Bike services Booking</h1>
                  <form className='form-group form-css' onSubmit={newbooking} >
                      <h2>services Booking_Details</h2>
                      <div>
                      <label>CustomerId </label>
                      <input type='text' name='customerId'className='form-control'onChange={(event)=>setcustomerId(event.target.value)} placeholder='customerId'/>
                      </div>
                      <div>
                      <label>Date</label>
                      <input type='date' name='bookingDate' className='form-control'onChange={(event)=>setbookingDate(event.target.value)}   placeholder=' bookingDate'/>
                      </div>
                      <div>
                      <label>What Services</label>
                      <select className='form-control' name='services' onChange={(event)=>setservices(event.target.value)}>
                        <option selected>Select</option>
                        <option>General service check-up</option>
                        <option>Oil change</option>
                        <option>Water wash</option>
                      </select>
                      </div>
                      <button type='submit' className='btn btn-success m-3'>BOOKING</button>       
                  </form>
                  
              </div>
            </div>
         </div>
        
        
        
        </>
    );
}