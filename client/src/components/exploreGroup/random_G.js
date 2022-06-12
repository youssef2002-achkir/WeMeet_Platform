import React, { Component } from 'react';
import fb from '../Footer/fb.png'
import Footer from '../Footer/footer';
import insta from '../Footer/insta.png'
import linkden from '../Footer/linkden.png'
import twitter from '../Footer/tw.png'
class RandomG extends Component {
    render() {

        const read_more = () => {
            const v = document.getElementsByClassName('readmore');
            const ch = document.createElement('p');
            const sl = document.createElement('a');
            
            ch.innerHTML = `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`;
            sl.innerHTML = `Show Less`
            
            
            document.getElementById('wewe').style.display = 'none';
            v[0].append(ch);
            v[0].append(sl);

        }
        const ev_click = () => {
            const v = document.getElementById('wo').style.display = 'none';
            
        }
        const about_click = () => {
            const v = document.getElementById('wo').style.display = 'flex';
        }


        return (
            <div className='RandomG'>
                <nav id='main-nav'>
                    <h1>WE</h1><h2>Meet</h2>
                    <input type="search" placeholder='Search for keywords'/>
                    <img  src={require('../exploreEvent/search icon.png')}/>
                    <div>
                        <a>Start New Group</a>
                        <button id="SignIn">SIGN IN</button>
                        <button id="SignUp">SIGN UP</button>
                    </div>
                </nav><br/><br/>
                <hr/>

                <div className='details'>
                    <section id='one'>
                        <img src={require("./coding group.png")}/>
                    </section>
                    <section id='tow'>
                        <h1>White Hackers Group</h1><br/><br/>
                        <section><img src={require("./location.png")}/><p>RABAT</p></section>
                        <section><img src={require("./members.png")}/><p>16 Members Public Group</p></section>
                        <section><img src={require("./organizer.jpg")}/><p>Organized By : <b>Youssef Achkir</b></p></section><br/>
                        <i>Share:</i>
                    <section id='tt'>
                        <img src={fb}/>
                       <img src={insta}/>
                       <img src={linkden}/>
                       <img src={twitter}/>
                    </section>
                    
                    </section>
                </div><br/>
                <hr/>
                <nav id='sec'>
                    <a onClick={about_click}>About</a>
                    <a onClick={ev_click}>Events</a>
                    <a>Members</a>
                    <a>Photos</a>
                    <a>Discussions</a>
                    <a>More</a>
                    <button id='join'><p>Join this group</p></button>
                </nav><br/><br/>
                <div className='mainnn'>
                <div className='infoss'><br/>
                <p id='wo'>
                <section id='one' className='readmore'>
                <b>What's we are about</b><br/><br/>
                    <p>The Art of Russian - is a Russian language school. Our method combines 
                    speaking and integrated grammar learning, including audio and video assignments.
                     We have a support system with spaced repetition cards for continuous learning in-between lessons.<br/>
                    We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language.</p>
                     <a id='wewe' onClick={read_more}>Read More</a>
                </section><br/>
                </p>
                <b>Upcomming Events(4)</b><a id='seeall'>See All</a><br/><br/>
                <section id='tow'>
                <section>
                <a>Monday, June 13, 2022, 10 PM GMT</a>
                        <h1>Elite Developers Competition Camp</h1>
                        <img id='img1' src={require("./how history affects politics.jpg")}/>
                        <img id='img2' src={require("./video.png")}/><u>Link visible for attendees</u>
                </section><br/>
                        <p>
                        We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language
                     <button>Attend</button>
                    </p>
                </section><br/>
                <section id='tow'>
                <section>
                <a>Monday, June 13, 2022, 10 PM GMT</a>
                        <h1>Elite Developers Competition Camp</h1>
                        <img id='img1' src={require("./how history affects politics.jpg")}/>
                        <img id='img2' src={require("./video.png")}/><u>Link visible for attendees</u>
                </section><br/>
                        <p>
                        We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language
                     <button>Attend</button>

                    </p>
                </section><br/>
                <section id='tow'>
                <section>
                <a>Monday, June 13, 2022, 10 PM GMT</a>
                        <h1>Elite Developers Competition Camp</h1>
                        <img id='img1' src={require("./how history affects politics.jpg")}/>
                        <img id='img2' src={require("./video.png")}/><u>Link visible for attendees</u>
                </section><br/>
                        <p>
                        We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language
                     <button>Attend</button>
                    </p>
                </section><br/>
                <section id='tow'>
                <section>
                <a>Monday, June 13, 2022, 10 PM GMT</a>
                        <h1>Elite Developers Competition Camp</h1>
                        <img id='img1' src={require("./how history affects politics.jpg")}/>
                        <img id='img2' src={require("./video.png")}/><u>Link visible for attendees</u>
                </section><br/>
                        <p>
                        We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language
                     <button>Attend</button>
                    </p>
                </section><br/>
                <b>Past Events (1)</b><a id='seeall'>See All</a><br/><br/>
                <section id='tow' className='past'>
                <section>
                <a>Monday, June 13, 2022, 10 PM GMT</a>
                        <h1>Elite Developers Competition Camp</h1>
                        <img id='img1' src={require("./how history affects politics.jpg")}/>
                </section><br/><br/>
                        <p>
                        We provide a supportive and positive learning environment in which members are empowered to develop
                     speaking and listening skills, resulting in confident Russian conversations and motivation to learn the language
                    </p>
                </section>
                    
                </div>
                <div className='people'>
                    <br/><br/>
                    <section id='org'>
                    <img src={require("./boulzrag.png")}/><p><b>Organizer</b><br/>
                    Youssef Boulzrag</p></section>
                    <br/><br/><br/>
                    <b>Members(9)</b><a id='seeall'>See All</a>
                    <section id='mem'>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    <img src={require("./boulzrag.png")}/>
                    </section>
                </div>
</div>
<Footer/>
            </div>
        );
    }
}

export default RandomG;
