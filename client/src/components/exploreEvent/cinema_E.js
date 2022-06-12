import React, { Component } from 'react';
import Footer from '../Footer/footer';

class CinemaE extends Component {
    render() {
        const share_E = () => {
            const box = document.getElementsByClassName('infos');
            
            const child = document.createElement('div');
            child.innerHTML = `<section id="three">
            <a href="www.facebook.com">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
            <a href="">Twitter</a>
            </section>`
            
            // ✅ Works
            box[0].appendChild(child);
        }
        return (
            <div className='Ci_E'>
                <nav>
                    <h1>WE</h1><h2>Meet</h2>
                    <input type="search" placeholder='Search for keywords'/>
                    <input type="search" placeholder='Neighborhood or city '/>
                    <img  src={require('./search icon.png')}/>
                    <div>
                        <a>Start New Group</a>
                        <button id="SignIn">SIGN IN</button>
                        <button id="SignUp">SIGN UP</button>
                    </div>
                </nav><br/><br/>
                <hr/>
                <br/>
                <header>
                <p id='date'>Wednesday, June 15, 2022</p>
                <h1 id='title'>THREE DAY ENGLISH LEARNING CAMP (WED, THU, FRI)</h1>
                <section><img src={require('./boulzrag.png')}/><p id='host'>Hosted By<br/>Youssef Boulzrag</p></section>
                </header><br/>
                <hr/>
                <br/>
                <div className='evv'>
                <div className='desc'>
                    <img src={require("./learn en.png")}/>
                    <h2>Details</h2><br/><br/>
                    <b>3-day English Bootcamp</b><br/><br/>
                    <p id='1'>Due to security reasons, you will be able to see the Zoom link after RSVP and receive a password in a separate message.
                     Note, when you RSVP for the Wednesday lesson, you will also
                     have access to the other two lessons on Thursday and Friday. All lessons start at the same time, and last 40 minutes</p>
                     Schedule:<br/><br/>
                     <ul>
                         <li>Wednesday 6 pm GMT</li>
                         <li>Thursday 6 pm GMT</li>
                         <li>Friday 6 pm GMT</li>
                     </ul>
                     <br/><br/>
                     <p id='2'>In this 3-day Bootcamp, you will learn the <b>alphabet</b> and  <b> basic vocabulary</b> to start your English language journey. You will know
                      about pronunciation rules and vocabulary memorizing technics. At the end of the Bootcamp, you will be able to read, ask
                      questions and introduce yourself, including being able to greet people, and say your name, your profession, and where you live...</p>
                <br/>
                <section className='extras'>
                    <b>Attendees (3) <a>See All</a></b><br/><br/>
                    <section>
                       <section id='1' ><img src={require("./boulzrag.png")}/><p>Youssef Boulzrag</p><i>Organizer</i></section>
                       <section id='2'><img src={require("./bnhssi.png")}/><p>Zakaria Benhassi</p><i>Member</i></section>
                       <section id='3'><img src={require("./ACE.jpg")}/><p>Nagato San</p><i>Member</i></section>
                    </section>
                </section>
                </div>
                <div className='infos'>
                    <section id="one"><img src={require("./how history affects politics.jpg")}/><b><a>Casablanca English Language Group</a><br/><i>Public</i></b><br/></section>
                    <br/><section id='tow'>
                        <section><img src={require("./done.png")}/><p>Respond by Wednesday , June 15, 20229:45 PM</p></section><br/>
                        <section><img src={require("./clock.png")}/><p>Wednesday, June 15, 2022, 10:00 PM to Friday, June 17, 2022, 10:40 PM GMT</p></section><br/>
                        <section><img src={require("./video.png")}/><p>Online event Link visible for attendees</p></section><br/>
                        </section>
                        <section id='three'>
                            <button id='share' onClick={share_E}>SHARE</button>
                            <button id='attend'>Attend Online</button>
                        </section>
                    
                </div>


                </div>
                <Footer/>
                
            </div>
        );
    }
}

export default CinemaE;
