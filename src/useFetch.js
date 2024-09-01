import { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './context';

const useFetch = (endpoint, dependencies = []) => {
    const { setData, pageSize, currentPage } = useContext(AppContext);

    useEffect(() => {
        axios.get(`https://dummyjson.com/${endpoint}?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`)
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [endpoint, pageSize, currentPage, ...dependencies]);
};

export default useFetch;

/*
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './context';

const useFetch = (endpoint) => {
    const { setData, pageSize, currentPage } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/${endpoint}?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
                setData(response.data);  // Assuming the API returns the data directly
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [endpoint, setData, pageSize, currentPage]);  // Ensure these are stable and change only as intended
};

export default useFetch;
*/