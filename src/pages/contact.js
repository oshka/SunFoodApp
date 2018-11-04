import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Get In Touch</h1>
    <p>Our contact form was made using Formspree</p>
    <p>Contact us if you:</p>
    <ul>
      <li> liked our app and you want to tell us your delight</li>
      <li> want to add your restaurant, its menu and dishes to our base</li>
      <li>if you have seen any mistake and want to help us fix it</li>
      <li> if you have new ideas for the development of our application</li>
      <li> if you want to join our team and become a programmer
      </li>
    </ul>
    <h2 className="mail-text">Mail To <span>Sun</span>Code<span>Flower</span></h2>

    <div className="contact-form">
    <form action="https://formspree.io/olkace@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Your Name"/>
      <input type="email" name="_replyto" placeholder="Your email" />
      <input type="text" name="subject"  placeholder="Subject"/>
      <textarea placeholder="Delights, comments, restaurant"> </textarea>
      <input type="hidden" name="_next" value="http://localhost:8000/contact" />
      <input type="submit" value="Send" />
    </form> 
    </div>
  </Layout>
)

export default ContactPage
