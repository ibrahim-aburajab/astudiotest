import React, { useContext } from 'react';
import { AppContext } from '../context';

const Pagination = () => {
    const { currentPage, setCurrentPage } = useContext(AppContext);

    return (
        <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
