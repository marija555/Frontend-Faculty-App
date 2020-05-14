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
import rva.jpa.Fakultet;

import rva.repository.FakultetRepository;

@RestController
@Api(tags = {"Fakultet CRUD operacije"} )

public class FakultetRestController {
	
	@Autowired
	private FakultetRepository fakultetRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("fakultet")
	@ApiOperation(value= "Vraća kolekciju svih fakulteta iz baze podataka")

	public Collection<Fakultet> getFakultet() {
		return fakultetRepository.findAll();
	}
	@GetMapping("fakultet/{id}")
	@ApiOperation(value= "Vraća fakultet iz baze podataka čiji je ID prosleđen kao path varijabla")

	public Fakultet getFakultet(@PathVariable("id") Integer id) {
		return fakultetRepository.getOne(id);
	}
	@GetMapping("fakultetNaziv/{naziv}")
	@ApiOperation(value= "Vraća kolekciju fakulteta koji u nazivu sadrže string prosleđen kao path varijabla")

	public Collection<Fakultet> getFakultetByNaziv(@PathVariable("naziv") String naziv) {
		return fakultetRepository.findByNazivContainingIgnoreCase(naziv);
}
	@PostMapping("fakultet")	
	@CrossOrigin
	@ApiOperation(value= "Upisuje fakultet u bazu podataka")

	public ResponseEntity<Fakultet> insertFakultet(@RequestBody Fakultet fakultet){
		if(!fakultetRepository.existsById(fakultet.getId())) {
			fakultetRepository.save(fakultet);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("fakultet")
	@CrossOrigin
	@ApiOperation(value= "Modifikuje fakultet u bazi podataka")

	public ResponseEntity<Fakultet> updateFakultet(@RequestBody Fakultet fakultet){
		if(!fakultetRepository.existsById(fakultet.getId())) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		fakultetRepository.save(fakultet);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@DeleteMapping("fakultet/{id}")
	@CrossOrigin 
	@ApiOperation(value= "Briše fakultet iz baze podataka čiji je id prosleđen kao path varijabla")

	public ResponseEntity<Fakultet> deleteFakultet(@PathVariable ("id") Integer id){
		if(!fakultetRepository.existsById(id)) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	
		fakultetRepository.deleteById(id);
		if(id==-100)
			jdbcTemplate.execute(
					" INSERT INTO \"fakultet\" (\"id\", \"naziv\", \"sediste\")"
					+ " VALUES (-100,'test', '')");
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}