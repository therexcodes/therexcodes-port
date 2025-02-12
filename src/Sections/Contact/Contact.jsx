import styles from './Contact.module.css'

function Contact() {
    return (
        <section id='contact' className={styles.Cont}>
            <h1 className='sectionTitle'>CONTACT</h1>
            <form action="">
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
                    <input type="name" id="name" placeholder='Email' required/>
                    
                </div>

                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Name
                    </label>
                    <textarea type="text" name='message' placeholder='Message' required>
                    </textarea>
                </div>
                <input type="submit" className='hover btn' value="Submit" />
            </form>
        </section>
    )
}

export default Contact
