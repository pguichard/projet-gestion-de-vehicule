import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import VehicleList from "../../components/VehicleList";

const CompanyPage = () => {
    const [company, setCompany] = useState(null);
    const params = useParams();
    useEffect(() => {
        // Faire une requête GET à l'API Spring Boot pour récupérer les véhicules
        axios.get(`http://localhost:8080/api/companies/${params.id}`)
            .then(response => {
                setCompany(response.data); // Mettre à jour l'état avec les véhicules récupérés
            })
            .catch(error => {
                console.error("Il y a une erreur avec la récupération des véhicules", error);
            });
    }, [params.id]); // Ce useEffect ne s'exécutera qu'une seule fois au montage du composant

    return (
        <>
            <h1>Une compagnie {company?.name}</h1>
            <VehicleList vehicles={company?.vehicles} />

        </>
    )
}

export default CompanyPage;

