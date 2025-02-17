package PG.stage.gestion.vehicle.service;
import PG.stage.gestion.vehicle.exception.NotFoundException;
import PG.stage.gestion.vehicle.model.Vehicle;
import PG.stage.gestion.vehicle.reposytory.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }


    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }


    public Vehicle getVehicleById(long id) throws NotFoundException {
        return vehicleRepository.findById(id) // Optional Object
                .orElseThrow(NotFoundException::new);
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(long vehicleId, Vehicle vehicle)throws NotFoundException {
        this.getVehicleById(vehicleId);
        vehicle.setId(vehicleId);
        return vehicleRepository.save(vehicle);
    };

    public void deleteVehicleById(long vehicleId) {
        vehicleRepository.deleteById(vehicleId);
    };
}
