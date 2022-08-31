import React from 'react';

// Routing modules
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components modules
import Header from './components/Header';
import Home from './components/Home';
import Bags from './components/Bags';
import Items from './components/Items';
import Login from './components/Login';
//import Profile from './components/Profile';
//import Register from './components/Register';
//import Trips from './components/Trips';


// Styles modules
import {GlobalStyle} from './GlobalStyle';

const App: React.FC = () => (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            {/*<Route path='/profile' element={<Profile />} />
            <Route path='/trips' element={<Trips />} />*/}
            <Route path='/bags' element={<Bags />} />
            <Route path='/items' element={<Items />} />
            <Route path='/login' element={<Login />} />
            {/*<Route path='/register' element={<Register />} />*/}
        </Routes>
        <GlobalStyle />
    </Router>
);

export default App;