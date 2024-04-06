package me.ryzeon.rh.employee.domain.controller;

import me.ryzeon.rh.employee.domain.model.Employee;
import me.ryzeon.rh.employee.domain.service.EmployeeService;
import me.ryzeon.rh.shared.domain.exception.ResourceNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api")
@CrossOrigin(value = "http://localhost:3000")
public class EmployeeController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private EmployeeService service;

    @GetMapping("/employees")
    public List<Employee> findEmployees() {
        logger.info("Fetching all employees");
        return service.findEmployees();
    }

    @PostMapping("/employees")
    public Employee saveEmployee(@RequestBody Employee employee) {
        logger.info("Saving employee: {}", employee);
        return service.saveEmployee(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Integer id) {
        Employee employee = service.findEmployeeById(id);
        if (employee == null)
            throw new ResourceNotFoundException("Employee not found with id: " + id);
        logger.info("Fetching employee by id: {}", id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
        Employee employeeToUpdate = service.findEmployeeById(id);
        if (employeeToUpdate == null)
            throw new ResourceNotFoundException("Employee not found with id: " + id);
        employeeToUpdate.setName(employee.getName());
        employeeToUpdate.setDepartment(employee.getDepartment());
        employeeToUpdate.setSalary(employee.getSalary());
        logger.info("Updating employee: {}", employeeToUpdate);
        return ResponseEntity.ok(service.saveEmployee(employeeToUpdate));
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id) {
        Employee employee = service.findEmployeeById(id);
        if (employee == null)
            throw new ResourceNotFoundException("Employee not found with id: " + id);
        logger.info("Deleting employee by id: {}", id);
        service.deleteEmployee(id);
        return ResponseEntity.ok(Map.of("deleted", Boolean.TRUE));
    }
}
