package com.ems.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ems.entity.Employee;
import com.ems.exception.EmployeeNotFoundException;
import com.ems.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ems")
public class EmployeeController {

	@Autowired
	private EmployeeService empService;

	@PostMapping("/employee/")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		Employee e = empService.addNewEmployee(employee);
		return new ResponseEntity<Employee>(e, HttpStatus.CREATED);
	}

	@PutMapping("/employee/")
	public ResponseEntity<Optional<Employee>> updateDetails(@RequestBody Employee employee) {
		Optional<Employee> e = empService.updateEmployee(employee);
		if (e.isEmpty()) {
			throw new EmployeeNotFoundException();
		} else {
			return new ResponseEntity<Optional<Employee>>(e, HttpStatus.OK);
		}
	}

	@GetMapping("/employees/")
	public ResponseEntity<List<Employee>> showAllEmps() {
		List<Employee> e = empService.getAllEmps();
		return new ResponseEntity<List<Employee>>(e, HttpStatus.OK);
	}

	@PutMapping("/employee/profile/")
	public ResponseEntity<Optional<Employee>> viewDetails(@RequestBody Employee employee) {
		Optional<Employee> e = empService.getEmpByID(employee);
		if (e.isEmpty()) {
			throw new EmployeeNotFoundException();
		} else {
			return new ResponseEntity<Optional<Employee>>(e, HttpStatus.OK);
		}
	}

	/*@DeleteMapping("/employee/")
	public ResponseEntity<Employee> deleteEmp(@RequestBody Employee employee) {
		int flag = empService.deleteEmployee(employee);
		if (flag == 0) {
			throw new EmployeeNotFoundException();
		} else {
			return new ResponseEntity<Employee>(HttpStatus.OK);
		}
	}*/
	
	@PutMapping("/employee/del/")
	public ResponseEntity<Employee> deleteEmp(@RequestBody Employee employee) {
		int flag = empService.deleteEmployee(employee);
		if (flag == 0) {
			throw new EmployeeNotFoundException();
		} else {
			return new ResponseEntity<Employee>(HttpStatus.OK);
		}
	}
}
