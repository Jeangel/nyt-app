import React from 'react';
import Search from '../pages/Search';
import Result from './../pages/Result';
import { Router } from '@reach/router'

export default function Routes() {
    return (
        <Router>
            <Search path="/" default></Search>
            <Result path="/result"></Result>
        </Router>
    );
}