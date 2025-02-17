// src/components/VehicleList.jsx
import React, { useState, useEffect } from 'react';
import axios from "axios";
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
const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Faire une requête GET à l'API Spring Boot pour récupérer les véhicules
        axios.get('http://localhost:8080/api/vehicles')
            .then(response => {
                setVehicles(response.data); // Mettre à jour l'état avec les véhicules récupérés
            })
            .catch(error => {
                console.error("Il y a une erreur avec la récupération des véhicules", error);
            });
    }, []); // Ce useEffect ne s'exécutera qu'une seule fois au montage du composant

    return (
        <div>
            <h2>Liste des Véhicules</h2>
            <Table dataSource={vehicles} columns={columns} />
        </div>
    );
};

export default VehicleList;
