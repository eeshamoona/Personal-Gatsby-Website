import React from "react"

import Layout from "../components/layout"
import Head from '../components/head'
import './contactMe.scss'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title = "Contact"></Head>
            <h1>Contact Me</h1>
            {/* <p>You can contact me at:  <a href = "mailto:eeshamoona@gmail.com"> eeshamoona@gmail.com </a></p>
            <p>Instagram: <a href = "https://www.instagram.com/eeshamoona/?hl=en"> @eeshamoona </a></p>
            <p>LinkedIn: <a href = "https://www.linkedin.com/in/eesha-moona-264b111a6/"> eesha-moona </a></p> */}
            <div>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="contact-form" value="contact" />
                    <div class="flex-container">
                    <input class="input" type="text" name="name" id="name" placeholder="NAME*" />
                    <input class="input" type="email" name="email" id="email" placeholder="EMAIL*"/>
                    <input class="input" type="text" name="subject" id="subject" placeholder="SUBJECT*"/>
                    <textarea class="input" name="message" id="message" rows="5" placeholder="MESSAGE*" />
                    <button class="button" type="submit">Send</button>
                    {/* <input class ="clear"type="reset" value="Clear" />    */}
                </div>             
                </form>
            </div>
            </Layout>       
        </div>
    )
}

export default ContactPage