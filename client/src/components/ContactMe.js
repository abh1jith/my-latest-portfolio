import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function ContactMe(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')            
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (<div className='d-flex flex-column min-vh-100'>
    <form ref={form} onSubmit={sendEmail}>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
            <input type="text" name="user_name" class="form-control" placeholder="How should I refer to you?"  />
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            <input type="email" name="user_email" class="form-control" placeholder="Could you provide me your email?" />
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Message</span>
            <textarea name="message" class="form-control" id="validationTextarea" rows="5" />
        </div>


        <input type="submit" value="Send your Message" className='btn btn-dark' />
    </form>
  </div>);
};

export default ContactMe;