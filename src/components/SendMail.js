import emailjs from "emailjs-com";
import React from 'react';
import select from 'react-bootstrap';

export default function SendMail() {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
    emailjs.sendForm('service_lpapieb', 'template_3q8g3n7',e.target, 'user_vhbUORBjgpIWhEFgIeb4W')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                        <div className="form-group mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="to_email"/>
                        </div>
                        <div className="form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="to_name"/>
                        </div>
                        <div className=" form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="ountry"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                </form>
            </div>
        </div>
    )
}