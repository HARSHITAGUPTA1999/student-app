import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/all-students';

  constructor(private httpClient: HttpClient) {}

  //method to get all students list from api
  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<String> {
    return this.httpClient.delete<String>(`${this.baseUrl}/${id}`);
  }
}
