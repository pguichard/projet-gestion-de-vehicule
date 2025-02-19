// src/components/VehicleList.jsx
import React from 'react';
import {Table} from "antd";
import {useNavigate} from "react-router-dom";

const columns = [
    {
        title: 'Marque',
        dataIndex: 'make',
    },
    {
        title: 'Model',
        dataIndex: 'model',
    },
    {
        title: 'Immatriculation',
        dataIndex: 'license',
    },
    {
        title: 'Année',
        dataIndex: 'year',
    },
];
const VehicleList = ({vehicles}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Liste des Véhicules</h2>
            <Table dataSource={vehicles} columns={columns}
                   onRow={(vehicle) => {
                       return {
                           onClick: () => {
                               navigate(`/vehicles/${vehicle.id}`);
                           },
                       }
                   }}/>

        </div>

    );
};

export default VehicleList;
