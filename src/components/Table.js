import React, { useContext } from 'react';
import { AppContext } from '../context';

const Table = ({columnss}) => {
    const { data } = useContext(AppContext);
    const { displayData } = useContext(AppContext);

    console.log(displayData);
    if(data) {

        if(data.users) {
            //var dataArray = Object.values(data.users);
            if(displayData.length > 0) {
                var dataArray = displayData;
            } else {
                var dataArray = Object.values(data.users);
            }

        } else if(data.products) {
            if(displayData.length > 0) {
                var dataArray = displayData;
            } else {
                var dataArray = Object.values(data.products);
            }
        }




        return (
            <table className="table">
                <thead >
                <tr>
                    {/* Define table headers here */}
                    {/* Add other columns as needed */}
                    {columnss.map((cell) => (
                        <th key={cell.accessor}>{cell.Header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array.isArray(dataArray) && dataArray.length ? dataArray.slice('id').map((item) => (
                    <tr key={item.id}>
                        {/* <td>{item.id}</td>*/}
                        {columnss.map((cell) => (
                            <td key={cell.accessor}>{item[cell.accessor]}</td>
                        ))}
                        {/* Map other fields accordingly */}
                    </tr>
                )) : <tr><td colSpan="2">Loading or no data available...</td></tr>}
                </tbody>
            </table>
        );
    }

};

export default Table;
