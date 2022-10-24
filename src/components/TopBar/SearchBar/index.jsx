import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Label from './Label';
import Input from './Input';
import ArrowRedirect from './ArrowRedirect'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    return (
        <div className='searchBar'>
            <Label />
            <Input
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                navigate={navigate}
            />
            <ArrowRedirect
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                navigate={navigate}
            />
        </div >
    )
};