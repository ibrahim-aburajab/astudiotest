import React, {useContext} from 'react';
import useFetch from '../useFetch';
import Table from '../components/Table';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { AppContext } from '../context';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component

import SearchComponent from '../components/SearchComponent';
import FiltersComponent from '../components/FiltersComponent';


const Users = () => {
    useFetch('users');

    const columnss = [
        { Header: "ID", accessor: "id" },
        { Header: "User Name", accessor: "username" },
        { Header: "First Name", accessor: "firstName" },
        { Header: "Last Name", accessor: "lastName" },
        { Header: "Phone", accessor: "phone" },

        //{ Header: "Email", accessor: "email" },
        //{ Header: "Phone", accessor: "phone" },
        //{ Header: "State", accessor: "state" },
        //{ Header: "City", accessor: "city" },
        //{ Header: "Address", accessor: "address" }
    ];
    //console.log(columnss);

    const breadcrumbPaths = [
        { label: 'Home', url: '/' },
        { label: 'Users', url: '/users' }
    ];


    return (
        <div>
            <Breadcrumb paths={breadcrumbPaths} />
            <h1>Users</h1>
            <SearchComponent />
            <FiltersComponent />
            <Filters />
            <Table columnss={columnss} />
            <Pagination />
        </div>
    );
};



export default Users;
