package PG.stage.gestion.vehicle.test;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class VehicleServiceTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void testGetVehicles() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/vehicles/7"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.content().json("""
                {
                    "id": 7,
                    "company": {
                        "id": 1,
                        "vehicles": [
                            {
                                "id": 1,
                                "company": 1,
                                "make": "BMW",
                                "model": "SERIE 1",
                                "year": 2005,
                                "license": "AN-106-HX"
                            },
                            {
                                "id": 4,
                                "company": 1,
                                "make": "rolls-royce",
                                "model": "Phantom VII",
                                "year": 2005,
                                "license": "GL-886-AW"
                            },
                            7
                        ],
                        "name": "Maintenance Habitat",
                        "address": "12 rue de chez claunet"
                    },
                    "make": "ferrari",
                    "model": "laferrari",
                    "year": 2019,
                    "license": "DN-196-YP"
                }
"""));
    }
}

