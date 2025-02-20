import {useEffect, useState} from "react";
import axios from "axios";
import VehicleList from "../../components/VehicleList";


const VehiclesPage = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Faire une requête GET à l'API Spring Boot pour récupérer les véhicules
        axios.get(`http://localhost:8080/api/vehicles`)
            .then(response => {
                setVehicles(response.data); // Mettre à jour l'état avec les véhicules récupérés
            })
            .catch(error => {
                console.error("Il y a une erreur avec la récupération des véhicules", error);
            });
    }, []); // Ce useEffect ne s'exécutera qu'une seule fois au montage du composant

    return (
        <>
            <VehicleList vehicles={vehicles}/>
        </>

    )
}

export default VehiclesPage;