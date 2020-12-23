package com.test.testreactspring.todo;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	private static List<Todo> todos= new ArrayList();
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter,"Learn React",new Date(),false));
		todos.add(new Todo(++idCounter,"Learn Spring Boot",new Date(),false));
		todos.add(new Todo(++idCounter,"DEPLOY",new Date(),false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
