 import { useState } from "react";
import './Contact.css'


export default function Contact() {
    return (
        <div className="Contact"> 
        <img src="/Spiderman.png" alt="Spider" className="spider-image" />
        <h1>Contact</h1>
        <p className="intrest">Seems Like You Are Intrested !!!! ❤️</p>
        <p className="des">Feel free to reach out to me for any inquiries, collaborations, or just to say hello! You can contact me through the following channels:</p>
        <ul>
          <li>Email: <a href="mailto:kadamvivek1@outlook.com" className="mail">vivekkadam1@outlook.com</a></li>
          </ul>
          <ul>
          <li>Phone: <a href="tel:+919137406059" className="phone">+919137406059</a></li>
          </ul>
          <ul>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/vivek-kadam-537050232" target="_blank" rel="noopener noreferrer" className="linkdin">LinkedIn</a></li>
          </ul>
          <ul>
          <li>GitHub: <a href="https://github.com/vivek-cooder" target="_blank" rel="noopener noreferrer" className="github">GitHub</a></li>
            </ul>
            <ul>
          <li>Behance: <a href="https://www.behance.net/vivekkaddam" target="_blank" rel="noopener noreferrer" className="behance">Behance</a></li>
            </ul>
        </div>
    )
}