package PG.stage.gestion.vehicle.reposytory;

import PG.stage.gestion.vehicle.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //c'est celui qui donne les méthodes CRUD
public interface CompanyRepository extends JpaRepository<Company, Long> {
}
