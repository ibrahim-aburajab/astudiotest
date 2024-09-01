import React, { useState, useContext } from 'react';
import useFetch from '../useFetch';
import axios from 'axios';
import { AppContext } from '../context';
import { useLocation } from 'react-router-dom';



const FiltersComponent = () => {
    const { setData, setFilteredData, pageSize, currentPage } = useContext(AppContext);
    const [filterValue, setFilterValue] = useState('');

    const location = useLocation();


    const handleFilterChange = async (field, value) => {
        setFilterValue(value);
        try {
            const response = await axios.get(`https://dummyjson.com/${location.pathname.substring(1)}/search?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}&q=${value}`);
            //console.log(response.data);
            setFilteredData(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by..."
                value={filterValue}
                onChange={e => handleFilterChange('fieldName', e.target.value)}  // Adjust field name as necessary
            />
        </div>
    );
};

export default FiltersComponent;
