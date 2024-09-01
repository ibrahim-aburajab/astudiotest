import React, {useContext} from 'react';
import useFetch from '../useFetch';
import Table from '../components/Table';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import Breadcrumb from "../components/Breadcrumb";

import SearchComponent from '../components/SearchComponent';
import FiltersComponent from '../components/FiltersComponent';


const Products = () => {
    useFetch('products');
    const columnss = [
        { Header: "ID", accessor: "id" },
        { Header: "Title", accessor: "title" },
        //{ Header: "Description", accessor: "description" },
        { Header: "Category", accessor: "category" },
        { Header: "Brand", accessor: "brand" },
        { Header: "Price", accessor: "price" },
        { Header: "Rating", accessor: "rating" }

    ];

    //console.log(Products);
    const breadcrumbPaths = [
        { label: 'Home', url: '/' },
        { label: 'Products', url: '/products' }
    ];

    return (
        <div>
            <Breadcrumb paths={breadcrumbPaths} />
            <h1>Products</h1>
            <SearchComponent />
            <FiltersComponent />
            <Filters />
            <Table columnss={columnss} />
            <Pagination />
        </div>
    );
};

export default Products;
