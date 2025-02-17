package PG.stage.gestion.vehicle.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity

public class Vehicle extends SuperEntity {

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;

    private String make;//Marque
    private String model;
    private Integer year;//année
    private String license;//immate

    public Vehicle(Company company, String make, String model, Integer year, String license) {
        this.company = company;
        this.make = make;
        this.model = model;
        this.year = year;
        this.license = license;
    }

    public Vehicle() {
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }
}
