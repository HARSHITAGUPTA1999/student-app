package com.LearningProject.StudentApp.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.LearningProject.StudentApp.models.Student;
import com.LearningProject.StudentApp.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepo;

	public List<Student> AllStudents(){
		return this.studentRepo.findAll();
	}
	
	public Student getOneStudent(int id) {
		return this.studentRepo.findById(id).orElse(null);
	}
	
	public Student createStudent(Student student) {
		return this.studentRepo.save(student);
	}
	
	public Student updateStudent(int id, Student updatedStudent) {
		Student studenttoBeupdated = this.studentRepo.findById(id).orElse(null);
		if(studenttoBeupdated != null) {
			return this.studentRepo.save(updatedStudent);
		}
		return null;
	}
	
	public Student deleteStudent(int id) {
		Student deletedStudent = this.studentRepo.findById(id).orElse(null);
	    this.studentRepo.delete(deletedStudent);
	    return deletedStudent;
	}
}
