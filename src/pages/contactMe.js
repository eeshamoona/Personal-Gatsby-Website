import React from "react"

import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title = "Contact"></Head>
            <h1>Contact Me</h1>
            <p>You can contact me at:  <a href = "mailto:eeshamoona@gmail.com"> eeshamoona@gmail.com </a></p>
            <p>Instagram: <a href = "https://www.instagram.com/eeshamoona/?hl=en"> @eeshamoona </a></p>
            <p>LinkedIn: <a href = "https://www.linkedin.com/in/eesha-moona-264b111a6/"> eesha-moona </a></p>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                <label> Name 
                    <input type="text" name="name" id="name" />
                    </label>
                <label> Email 
                    <input type="email" name="email" id="email" />
                    </label>
                <label> Subject
                    <input type="text" name="subject" id="subject" />
                    </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />                
                <input type="hidden" name="bot-field" />
                </form>
            </Layout>       
        </div>
    )
}

export default ContactPage