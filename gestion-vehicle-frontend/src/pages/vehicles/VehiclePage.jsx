import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import FormVehicle from "../forms/FormVehicle";
import {Button} from "antd";


const VehiclePage = () => {
    const [vehicle, setVehicle] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // Faire une requête GET à l'API Spring Boot pour récupérer les véhicules
        axios.get(`http://localhost:8080/api/vehicles/${params.id}`)
            .then(response => {
                setVehicle(response.data); // Mettre à jour l'état avec les véhicules récupérés
            })
            .catch(error => {
                console.error("Il y a une erreur avec la récupération des véhicules", error);
            });
    }, [params.id]); // Ce useEffect ne s'exécutera qu'une seule fois au montage du composant

    return (
        <>
            <h1>Le véhicule {vehicle?.license}</h1>
            {vehicle && <FormVehicle vehicle={vehicle}/>}

            <Button type="cyan" htmlType="submit" onClick={() => navigate(`/vehicles`)}>
                Retour
            </Button>
        </>
    )
}

export default VehiclePage;

