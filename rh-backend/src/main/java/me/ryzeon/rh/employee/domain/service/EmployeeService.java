package me.ryzeon.rh.employee.domain.service;

import me.ryzeon.rh.employee.domain.model.Employee;
import me.ryzeon.rh.employee.domain.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> findEmployees() {
        return repository.findAll();
    }

    @Override
    public Employee findEmployeeById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    @Override
    public void deleteEmployee(Integer id) {
        repository.deleteById(id);
    }
}
