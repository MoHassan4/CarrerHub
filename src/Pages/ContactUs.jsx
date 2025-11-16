import { useState } from "react";

import "../css/contactUs.css";

function ContactUs() {

const[name , setName] =useState("")
const[email , setEmail] =useState("")
const [subject, setSubject] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  if(!name || !email || !message){
    alert("Message failed to send. Please fill in the empty inputs.")
  }else{alert("Sent successfully ✅. Thank you for contacting us")}

      setName("")
      setEmail("")
      setSubject("")
      setPhone("")
      setMessage("")
}

  return (
    <>
      <div id="main">
        <div id="top-content">
          <h1>We Are Here Us to Help</h1>
          <a href="#">
            Have question,feedback,or need support?reach the CareerHub team.
          </a>
        </div>

        <div id="bottom-content">
          <div id="left-content">
            <h4>Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="text" placeholder="Subject" value={subject}  onChange={(e) => setSubject(e.target.value)} />
              <input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <textarea placeholder="Your Message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div id="right-content">
            <p>Other way to connect</p>
            <p>
              <i class="fa-solid fa-envelope"></i> Email:{" "}
              <a href="#" className="text-decoration-none text-warning">support@CareerHub.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
