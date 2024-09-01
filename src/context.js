import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [columnss, setColumnss] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // Provide the filtered data or the original data if no filtered data exists
    const displayData = filteredData.length > 0 ? filteredData : data;

    return (
        <AppContext.Provider value={{ data, setData, pageSize, setPageSize, currentPage, setCurrentPage, columnss, setColumnss, filteredData, setFilteredData, displayData }}>
            {children}
        </AppContext.Provider>
    );
};

