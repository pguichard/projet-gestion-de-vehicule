import './App.css';
import VehicleList from "./components/VehicleList";
import CompanyList from "./components/CompanyList";

function App() {
  return (
    <div className="App">
        <CompanyList />
      <VehicleList/>
    </div>
  );
}

export default App;
