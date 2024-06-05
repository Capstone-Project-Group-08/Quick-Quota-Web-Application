import React from 'react'
import './Feedback.css';
import FooterL from '../Footer/FooterL';
export default function Feedback() {
  return (
    <div className='Feed-Main'>
        <div className='Feedback-M'>

            <h1 className='Feedback-H1'>Welcome Value Your Feedback!</h1>
            <p>
                We're always striving to improve and provide the best experience  for our users.<br></br> 
                Your feedback is essential to us. Please tske a moment to share your<br></br> 
                thoughts on your experience with our website and any suggestions<br></br> 
                you may have for improvement.
            </p>
        </div>


        <div className='FeedBack-Form'>
            <form action="">
                  
                  <div className="input-boxF">
                     <h6>Name</h6>
                     <input type = "Name" placeholder ='Please Enter Your Name' required className="Feed"/>
                   </div>


                   <div className="input-boxF">
                     <h6>Email</h6>
                     <input type = "Email" placeholder ='Please Enter Your Email' required className="Feed"/>                   
                   </div>

                   <div className="input-boxF">
                     <h6>Age</h6>
                     <input type = "Age" placeholder ='Please Enter Your Age' required className="Feed"/>                    
                   </div>

                   <div className="input-boxF">
                     <h6>Comment</h6>
                     <input type = "Comment" placeholder ='Please Enter Your Comment' required className="Feed"/>                    
                   </div>   

                   <button className='FeedBtn' type="submit">Submit</button>
            </form>
        </div>

        <FooterL/>
    
    </div>
  )
}
