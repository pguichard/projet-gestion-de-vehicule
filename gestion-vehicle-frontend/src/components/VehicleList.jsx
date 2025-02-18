// src/components/VehicleList.jsx
import React from 'react';
import {Table} from "antd";

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
    return (
        <div>
            <h2>Liste des Véhicules</h2>
            <Table dataSource={vehicles} columns={columns} />
        </div>
    );
};

export default VehicleList;
