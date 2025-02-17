// src/components/VehicleList.jsx
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Table} from "antd";

const columns = [
    {
        title: 'Nom',
        dataIndex: 'name',
    },
    {
        title: 'Adresse',
        dataIndex: 'address',
    },

];
const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        // Faire une requête GET à l'API Spring Boot pour récupérer les véhicules
        axios.get('http://localhost:8080/api/companies')
            .then(response => {
                setCompanies(response.data); // Mettre à jour l'état avec les véhicules récupérés
            })
            .catch(error => {
                console.error("Il y a une erreur avec la récupération des véhicules", error);
            });
    }, []); // Ce useEffect ne s'exécutera qu'une seule fois au montage du composant

    return (
        <div>
            <h2>Liste des Company</h2>
            <Table dataSource={companies} columns={columns} />
        </div>
    );
};

export default CompanyList;