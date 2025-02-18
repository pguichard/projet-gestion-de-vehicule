import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import CompanyPage from "./pages/companies/CompanyPage";
import DefaultLayout from "./layouts/DefaultLayout";

const Router = () => {
    return (

        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route index element={<HomePage/>}/>

                <Route path="companies">
                    <Route index element={<CompaniesPage/>}/>
                    <Route path=":id" element={<CompanyPage/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Router;