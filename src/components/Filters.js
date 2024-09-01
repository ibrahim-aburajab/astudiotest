import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context';

const Filters = () => {
    const { setPageSize } = useContext(AppContext);

    return (
        <div>
            <select onChange={(e) => setPageSize(Number(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            {/* Add search input and other filters */}
        </div>
    );
};

export default Filters;
