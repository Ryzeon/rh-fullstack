package me.ryzeon.rh.employee.domain.service;

import me.ryzeon.rh.employee.domain.model.Employee;

import java.util.List;

public interface IEmployeeService {

    List<Employee> findEmployees();

    Employee findEmployeeById(Integer id);

    Employee saveEmployee(Employee employee);

    void deleteEmployee(Integer id);
}
