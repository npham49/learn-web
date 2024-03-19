package com.examplerestservice.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examplerestservice.dao.*;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class MainRESTController {
  private EmployeeDao employeeDAO;

  @GetMapping(path = "/employees", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
  public ResponseEntity<Map<String, Employee>> getEmployees() {
    return new ResponseEntity<>(employeeDAO.getAllEmployees(), HttpStatus.OK);
  }

  @GetMapping("/")
  public String getMethodName() {
      return "Hello!";
  }
  
  @PostMapping(value = "/employees", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
  public Employee addEmployee(@RequestBody Employee emp) {
    System.out.println("(Service Side) Creating employee: " + emp.getEmpNo());
    return employeeDAO.addEmployee(emp);
  }
}
