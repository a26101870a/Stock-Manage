import React from "react";
import Title from "./Title";
import SearchBar from './SerachBar';

export default function Topbar({ filterValue, setFilterValue }) {
    return (
        <div className='stocksList_topbar'>
            <Title />
            <SearchBar
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
        </div>
    );
};