package com.test.testreactspring.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResource {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping(path="/todos")
	public List<Todo> getAllTodos(){
		return todoService.findAll();
	}
}
