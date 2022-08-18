import React from 'react';

// Routing modules
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components modules
import Header from './components/Header';
import Home from './components/Home';

// Context modules


// Styles modules
import {GlobalStyle} from './GlobalStyle';

const App: React.FC = () => (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <GlobalStyle />
    </Router>
);

export default App;