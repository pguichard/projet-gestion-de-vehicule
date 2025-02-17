package PG.stage.gestion.vehicle.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Company extends SuperEntity {

    @OneToMany(mappedBy = "company")
    @JsonManagedReference
    private List<Vehicle> vehicles;
    private String name;
    private String address;

    public Company(String name, String address) {
        this.name = name;
        this.address = address;
        this.vehicles = new ArrayList<>();
    }

    public Company() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public List<Vehicle> getVehicles() {
        return vehicles;
    }

    public void setVehicles(List<Vehicle> vehicles) {
        this.vehicles = vehicles;
    }
}
