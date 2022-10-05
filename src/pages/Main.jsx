import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from 'Pages/Layout';
import Blank from 'Pages/Blank';
import Dashboard from 'Pages/Dashboard';

const Main = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Dashboard />} />
                    <Route path='stock' element={<Blank />}>
                        <Route index element={<Blank />} />
                        <Route path=':stockId' element={<Blank />} />
                    </Route>
                    <Route path='portfolio' element={<Blank />} />
                    <Route path='mystocks' element={<Blank />} />
                    <Route path='help' element={<Blank />} />
                    <Route path='settings' element={<Blank />} />
                    <Route path='*' element={<Blank />} />
                </Route >
            </Routes>
        </HashRouter>
    );
}

export default Main;