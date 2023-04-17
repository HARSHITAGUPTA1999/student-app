package com.LearningProject.StudentApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.LearningProject.StudentApp.models.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

}
