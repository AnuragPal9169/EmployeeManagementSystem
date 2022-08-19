package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ems.entity.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
