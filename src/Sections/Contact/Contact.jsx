import styles from './Contact.module.css'
import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_6d9beep",  // Replace with your EmailJS Service ID
            "template_4pg3h0g", // Replace with your EmailJS Template ID
            form.current,
            "_xX3S3Q6SbJkcdjvd"  // Replace with your EmailJS Public Key
        )
        .then(
            (result) => {
            console.log("Email sent:", result.text);
            setMessageSent(true);
            },
            (error) => {
            console.error("Error sending email:", error.text);
            }
        );
    };


    return (
        <section id='contact' className={styles.Cont}>
            <h1 className='sectionTitle'>CONTACT</h1>
            {messageSent && <p className={styles.msgSent}>Message sent successfully!</p>}
            <form ref={form} onSubmit={sendEmail}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input type="text" id='name' name='name' placeholder='Name' required />
                </div>

                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input type="email" id="email" name='email' placeholder='Email' required/>
                    
                </div>

                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea type="text"id='message' name='message' placeholder='Message' required>
                    </textarea>
                </div>
                <input type="submit" className='hover btn' value="Submit" />
            </form>
        </section>
    )
}

export default Contact
