import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Landing_Page/main";
import Signup from './components/Signup/index.jsx';
import Login from './components/Login/index'
import Communities from './components/Communities/Communities';
import GroupMain from './components/GroupMain';
import NewGroup from './components/Create_Gr/newgr';
import Event from './components/Landing_Page/Event';
import RandomG from './components/exploreGroup/random_G';
import CinemaE from './components/exploreEvent/cinema_E';

function App() {
	const user = localStorage.getItem("token");
	return (
		<Routes>
			<Route path="/" exact element={<Main />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			
			<Route path='/Communities' element={<Communities/>}/>
			<Route path='/groupcreate' element={<GroupMain/>}/>
			<Route path='/newgrp' element={<NewGroup/>}/>
			<Route path='/Communities' element={<Communities/>}/>
			<Route path='/Events_b' element={<Event/>}/>
			<Route path='/randomG' element={<RandomG/>}/>
			<Route path='/Cinema_E' element={<CinemaE/>}/>
		</Routes>
	);
}

export default App;