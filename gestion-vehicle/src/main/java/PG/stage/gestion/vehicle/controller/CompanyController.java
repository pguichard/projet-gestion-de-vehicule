package PG.stage.gestion.vehicle.controller;

import PG.stage.gestion.vehicle.exception.NotFoundException;
import PG.stage.gestion.vehicle.model.Company;
import PG.stage.gestion.vehicle.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public List<Company> getCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{companyId}")
    public Company getCompanyById(@PathVariable long companyId) throws NotFoundException {
        return companyService.getCompanyById(companyId);
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return companyService.createCompany(company);
    }

    @PutMapping("/{companyId}")
    public Company updateCompany(@PathVariable Long companyId, @RequestBody Company company) throws NotFoundException {
        return companyService.updateCompany(companyId, company);
    }

    @DeleteMapping("/{companyId}")
    public void deleteCompany(@PathVariable Long companyId) {
        companyService.deleteCompanyById(companyId);
    }
}

