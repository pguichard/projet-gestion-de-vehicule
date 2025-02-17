package PG.stage.gestion.vehicle.controller;
import PG.stage.gestion.vehicle.exception.NotFoundException;
import PG.stage.gestion.vehicle.model.Vehicle;
import PG.stage.gestion.vehicle.service.VehicleService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getVehicle() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{vehicleId}")
    public Vehicle getVehicleById(@PathVariable long vehicleId) throws NotFoundException {
        return vehicleService.getVehicleById(vehicleId);
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.createVehicle(vehicle);
    }

    @PutMapping("/{vehicleId}")
    public Vehicle updateVehicle(@PathVariable long vehicleId, @RequestBody Vehicle vehicle)throws NotFoundException {
        return vehicleService.updateVehicle(vehicleId, vehicle);
    }

    @DeleteMapping("/{vehicleId}")
    public void deleteVehicle(@PathVariable long vehicleId) {
        vehicleService.deleteVehicleById(vehicleId);
    }


}
