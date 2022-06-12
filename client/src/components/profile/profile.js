import React from 'react';
import fb from '../Footer/fb.png';
import insta from '../Footer/insta.png'
import linkden from '../Footer/linkden.png'
import twitter from '../Footer/tw.png'
const Profile = () => {
    return (
        <div className='Profile'>
            <nav id='main-nav'>
                    <h1>WE</h1><h2>Meet</h2>
                    
                    <div>
                        <a>Finish Your Group</a>
                        <button id="SignIn">Explore</button>
                        <button id="SignUp">Messages</button>
                        <button id="SignUp">Notifications</button>
                    </div>
                </nav><hr/><br/><br/><br/><br/>

                <div className='MAINN'>
                    <h1>WHITE HACKERS GROUP-RABAT</h1>
                    <nav id='sec'>
                    <a >About</a>
                    <a >Events</a>
                    <a>Members</a>
                    <a>Photos</a>
                    <a>Discussions</a>
                    <a>More</a>
                    <button id='join'><p>My Profile</p></button>
                </nav><br/><br/>
                </div>
                <div className='BBB'>
                    <div className='one'>
                        <section id='one'>
                        <h1>RABAT</h1>
                        <h2>Founded Mar 23, 2022</h2>
                        <button>About Us</button><br/><br/><br/>
                        <a>Members<p>17</p></a>
                        <a>Upcoming Events<p>1</p></a>
                        <hr/>
                        <b>Organizers</b><br/><br/>
                        <img src={require("./how history affects politics.jpg")}/><a id='hg'>The Great Developers Organization</a>
                        <br/>

                        </section><br/><br/>
                        <section id='tow'>
                        <h1>People in this group are also in:</h1>
                        <hr/>
                        <img src={require("./how history affects politics.jpg")}/><br/><br/><a id='hg'>The Great Developers Group</a><hr/>
                        <img src={require("./how history affects politics.jpg")}/><br/><br/><a id='hg'>Lorem Ipsum Lorem Ipsum</a><hr/>
                        <img src={require("./how history affects politics.jpg")}/><br/><br/><a id='hg'>Lorem Ipsum Lorem Ipsum</a><hr/>
                        <br/>

                        </section>
                        <section></section>
                    </div>
                    <div className='tow'>
                        <h1>Youssef Achkir</h1><hr/>
                        <nav id='third'>
                        <a id='i'>edit profile</a>
                        <a id='i'>Email Settings</a>
                        <a id='i'>Leave Group</a><br/>
                        </nav>
                        <div className='wwwww'>
                        <section id='ii'><b>location:</b><p>Chichaoua</p></section> 
                        <section id='ii'><b>Since:</b><p>11/06/2022</p></section>
                        </div>
                       <section><b>location:</b><p>Chichaoua</p></section> 
                        <section><b>Since:</b><p>11/06/2022</p></section>
                        <b>Networks:</b>
                        <img src={fb}/>
                        <img src={insta}/>
                        <img src={linkden}/>
                        <img src={twitter}/>
                       

                    </div>
                </div>
        </div>
    );
}

export default Profile;
