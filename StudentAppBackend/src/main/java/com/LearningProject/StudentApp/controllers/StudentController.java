package com.LearningProject.StudentApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.LearningProject.StudentApp.models.Student;
import com.LearningProject.StudentApp.services.StudentService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentServ;

	@GetMapping("/all-students")
	public List<Student> getAllStudents(){
		return this.studentServ.AllStudents();
	}
	
	@GetMapping("/all-students/{sId}")
	public Student getSingleStudentDetail(@PathVariable("sId") int id){
		return this.studentServ.getOneStudent(id);
	}
	
	@PostMapping("/all-students")
	public Student PostStudentDetails(@RequestBody Student student){
		return this.studentServ.createStudent(student);
	}
	
	@PutMapping("/all-students/{sId}")
	public Student UpdateStudentDetails(@PathVariable("sId") int id, @RequestBody Student updatedStudent ){
		return this.studentServ.updateStudent(id, updatedStudent);
	}
	
	@DeleteMapping("/all-students/{sId}")
	public Student deleteSingleStudent(@PathVariable("sId") int id){
		return this.studentServ.deleteStudent(id);
	}
}
