import React from 'react';
import "./About.css";

export default function About() {
    return (
        <div className="about">
            <section className="about__section">
                <h2>About</h2>
                <hr />
                <p>Sotly is used to Short URLs <span><strong>Anonymously</strong></span> as we don't store your personal details while shorting the URL.
                We also provide <span><strong>Awesome Analytics</strong></span> where you can see details of the devices and Obfuscated IP Address of the Users(Who Used your service).
                We are working to provide even more great analytics.</p>
                <hr/>

                <p>If you want to contribute to this project, you can fork these repos
                    (<a href="https://github.com/abhishekraj272/Shotly-URL-Shortner-Backend" target="_blank"
                        rel="noopener noreferrer">Backend</a>,
                    <a href="https://github.com/abhishekraj272/Shotly-URL-Shortner-Frontend" target="_blank"
                        rel="noopener noreferrer"> Frontend</a>) and start contributing.</p>

                <p>If you want to want to add suggestions/complaint about this project or any other queries, you can <a href="mailto:abhishekraj272@gmail.com">contact me</a>.</p>
                <hr/>
                <p>I am Abhishek Raj, 3rd year student at KIIT University, India. You can connect me on 
                    <a href="https://linkedin.com/in/abhishekraj272" target="_blank" rel="noopener noreferrer"> Linkedin</a>,
                    <a href="https://twitter.com/abhishekraj272" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/abhishekraj272"> Github.</a></p>
            </section>
        </div>
    )
}
