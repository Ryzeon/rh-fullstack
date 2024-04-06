package me.ryzeon.rh.employee.domain.repository;

import me.ryzeon.rh.employee.domain.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
