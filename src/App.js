// Filename - App.js

import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4KZrvobhC7V7j5486t0MFTMtWWOF9AqtHg&s" 
                        />
                    </div>
                    <li>
                        <a href="#events">Events</a>
                    </li>
                    <li>
                        <a href="#guest-lectures">Guest Lectures</a>
                    </li>
                    <li>
                        <a href="#workshops">Workshops</a>
                    </li>
                    <li>
                        <a href="#about us">About Us</a>
                    </li>
                </ul>

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                         What is Currents?
                        </h1>
                        <p class="text-small">
                        CURRENTS is the annual technical symposium organized by the Department of Electrical and Electronics Engineering at the National Institute of Technology, Tiruchirappalli (NIT Trichy), also known as the Trical Department. Established in the 1990s by a group of enthusiastic members of the EEE Association, CURRENTS has grown significantly over the years. The most recent edition saw a remarkable attendance of over a thousand participants, highlighting the event's growing prominence.

Scheduled during the second week of February, at a time when academic pressures are more manageable, CURRENTS serves as an ideal platform for students to demonstrate their technical expertise, compete with peers, and draw inspiration from industry and academic leaders. The symposium features a wide array of innovative events, advanced workshops, and keynote lectures delivered by esteemed academicians and industry experts.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Workshops
                        </h1>
                        <p class="text-small">
                        Ready to level up your skills, explore something new, or just have a good time? We’ve got a lineup of fun and interactive workshops at Currents that you won’t want to miss! Whether you’re looking to boost your resume, dive into tech, get creative, or just learn some cool new tricks, there’s something for everyone. So come join us, bring your friends, and let’s make this event one to remember! You in? 
                        <br></br>
                        <br></br>
                        <a href="#register"><button class="btn new">Register now!</button></a></p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Guest Lectures
                        </h1>
                        <p class="text-small">
                        Want to hear from some amazing speakers and get inspired? We’ve got a series of guest lectures lined up at Currents, featuring experts from various fields who are ready to share their knowledge and experiences with you! Whether you’re looking for career advice, industry insights, or just some fresh perspectives, these talks are perfect for you. Don’t miss out—come learn, connect, and get motivated with us!
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="secondHalf">
                    </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Made by- Currents Dev Ops
                    <br></br>
                    <br></br>
                    Follow us on:
                </p>
            <center>  <a href="https://www.instagram.com/currents_nitt/">  <img src="https://synergy.nitt.edu/24/_next/image?url=%2F24%2F_next%2Fstatic%2Fmedia%2FIg.a7876b61.png&w=64&q=75"></img></a>
              <a href="https://www.facebook.com/currentsnitt/">  <img src="https://synergy.nitt.edu/24/_next/image?url=%2F24%2F_next%2Fstatic%2Fmedia%2FFb.48593c51.png&w=64&q=75"></img></a>
              <a href="https://in.linkedin.com/company/currents-nitt">  <img src="https://synergy.nitt.edu/24/_next/image?url=%2F24%2F_next%2Fstatic%2Fmedia%2FIn.cf1c6328.png&w=64&q=75"></img></a>
              </center>
              </footer>
        </div>
    );
}

 export default App;