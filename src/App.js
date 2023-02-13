import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const routes = {
    '/': <><Navbar /></>,
}

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        Object.keys(routes).map((route, index) => {
                            return (<Route key={index} path={route} element={routes[route]} />);
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App