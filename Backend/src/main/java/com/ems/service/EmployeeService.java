package com.ems.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.EmployeeRepo;
import com.ems.entity.Employee;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepo erepo;

	public Employee addNewEmployee(Employee employee) {
		return erepo.save(employee);
	}

	public Optional<Employee> updateEmployee(Employee employee) {
		Optional<Employee> e = erepo.findById(employee.getEid());
		if (e.isEmpty()) {
			return e;
		} else {
			Employee e1 = erepo.getReferenceById(employee.getEid());
			e1.setEname(employee.getEname());
			e1.setEage(employee.getEage());
			e1.setEstate(employee.getEstate());
			e1.setEusername(employee.getEusername());
			e1.setEpassword(employee.getEpassword());
			e1.setEemail(employee.getEemail());
			erepo.save(e1);
			Optional<Employee> e2 = erepo.findById(employee.getEid());
			return e2;
		}
	}

	public List<Employee> getAllEmps() {
		return erepo.findAll();
	}

	public Optional<Employee> getEmpByID(Employee employee) {
		return erepo.findById(employee.getEid());
	}

	public int deleteEmployee(Employee employee) {
		int flag = 0;
		Optional<Employee> e = erepo.findById(employee.getEid());
		if (e.isEmpty()) {
			return flag;
		} else {
			erepo.deleteById(employee.getEid());
			flag = 1;
			return flag;
		}
	}
}
