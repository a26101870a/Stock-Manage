import React from 'react';
import Label from './Label';
import Input from './Input';

export default function SearchBar({ filterValue, setFilterValue }) {
    return (
        <div className='searchBar'>
            <Label />
            <Input
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
        </div>
    )
};