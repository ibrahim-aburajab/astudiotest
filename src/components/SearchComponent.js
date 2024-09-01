import React, { useState, useContext } from 'react';
import { AppContext } from '../context';

const SearchComponent = () => {
    const { data, setFilteredData } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
        if (event.target.value === "") {
            setFilteredData(data);
        } else {

            if(data.users) {
                var dataArray = Object.values(data.users);
            } else if(data.products) {
                var dataArray = Object.values(data.products);
            }
            //console.log(event.target.value);
            //const filtered = data.filter(item => item.toString().includes(event.target.value));
            //const filtered = dataArray.filter(item => item.toString().includes(event.target.value));
            //console.log(JSON.stringify(dataArray).toString());
            const filtered = dataArray.filter(item => JSON.stringify(item).toString().toLowerCase().includes(event.target.value));

            //console.log(filtered);
            setFilteredData(filtered);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ display: 'inline-block' }}
            />
        </div>
    );
};

export default SearchComponent;
