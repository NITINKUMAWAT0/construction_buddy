import React from 'react';
import './ContactUs.scss'
function ContactUs() {
    return (
        <div className='contact'>
            <section className="about-header">
                <h2 className="s1_heading">#Let's Talk</h2>
                <p className="s1_heading1">LEAVE A MESSAGE,We love to hear your reviews!</p>
            </section>

            <section id="contact-details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency location contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <ul>
                            <li>
                                <i className="fas fa-map"></i>
                                <p>Xzy-99,Vaishali Nagar,Jaipur(Rajasthan)</p>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <p>justabhiabhi123@gmail.com</p>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <p>+91 9057204034</p>
                            </li>
                            <li>
                                <i className="fas fa-clock"></i>
                                <p>Monday - Saturday : 9:00am to 6:00pm</p>
                            </li>
                        </ul>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28463.12805198455!2d75.71994603427866!3d26.90695399019231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49e043a7acb%3A0xdad09ace57371810!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680094993863!5m2!1sen!2sin"
                            width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <section className="form-details">
                <form action="">
                    <span>LEAVE MESSAGE</span>
                    <h2>We Love To Hear Your Reviews</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button className="normal">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;
