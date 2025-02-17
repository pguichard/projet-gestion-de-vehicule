package PG.stage.gestion.vehicle.service;
import PG.stage.gestion.vehicle.exception.NotFoundException;
import PG.stage.gestion.vehicle.model.Company;
import PG.stage.gestion.vehicle.reposytory.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;


    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(long id) throws NotFoundException {
        return companyRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(long id, Company company) throws NotFoundException {
        this.getCompanyById(id);
        company.setId(id);
        return companyRepository.save(company);
    }
    public void deleteCompanyById(long id) {
        companyRepository.deleteById(id);
    }

}
