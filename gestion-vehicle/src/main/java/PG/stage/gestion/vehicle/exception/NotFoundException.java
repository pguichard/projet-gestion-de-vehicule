package PG.stage.gestion.vehicle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus (value = HttpStatus.NOT_FOUND, reason = "Not found data")
public class NotFoundException extends RuntimeException {

}
