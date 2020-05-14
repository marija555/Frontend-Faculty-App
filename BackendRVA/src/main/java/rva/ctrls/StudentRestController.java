
package rva.ctrls;

import java.util.Collection;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Departman;
import rva.jpa.Student;
import rva.repository.DepartmanRepository;
import rva.repository.StudentRepository;

@RestController
@CrossOrigin
@Api(tags = {"Student CRUD operacije"} )

public class StudentRestController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private DepartmanRepository departmanRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("student")
	@ApiOperation(value= "Vraća kolekciju svih studenta iz baze podataka")

	public Collection<Student> getStudent() {
		return studentRepository.findAll();
	}
	@GetMapping("student/{id}")
	@ApiOperation(value= "Vraća studenta iz baze podataka čiji je ID prosleđen kao path varijabla")

	public ResponseEntity<Student> getStudent(@PathVariable("id") Integer id) {
		Student student = studentRepository.getOne(id);
		return new ResponseEntity<Student>(student,HttpStatus.OK);
		}
	
	@GetMapping("studentSaDepartmanaId/{id}")
	@ApiOperation(value= "Vraća studente koji su na departmanu čiji je id prosleđen kao path varijabla")

	public Collection<Student> studentSaDepartmanaId(@PathVariable ("id")  int id) {
		Departman d= departmanRepository.getOne(id);
		return studentRepository.findByDepartman(d);
	}
	
	@PostMapping("student")
	@ApiOperation(value= "Upisuje studenta u bazu podataka")

	public ResponseEntity<Student> insertStudent(@RequestBody Student student) {
		if(!studentRepository.existsById(student.getId())) {
			studentRepository.save(student);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	
	@PutMapping("student")
	@ApiOperation(value= "Modifikuje studenta u bazi podataka")

	public ResponseEntity<Student> updateDepartman(@RequestBody Student student) {
		if(! studentRepository.existsById(student.getId())) 
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		studentRepository.save(student);
	
		return new ResponseEntity<>(HttpStatus.OK);
	}

	
	
	@DeleteMapping("student/{id}")
	@ApiOperation(value= "Briše studenta iz baze podataka čiji je id prosleđen kao path varijabla")

	public ResponseEntity<Student> deleteStudent(@PathVariable("id") Integer id){
		if(!studentRepository.existsById(id))
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		
		studentRepository.deleteById(id);
		
		if(id==-100) 
			jdbcTemplate.execute(
			 "INSERT INTO  \"student\"(\"id\", \"broj_indeksa\", \"ime\", \"prezime\", \"departman\", \"status\")"
			  + "VALUES(-100, 'ii15-2015', 'test', ' ', 1, 1)");
		
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	
	
}

