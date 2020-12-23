package com.test.testreactspring.todo;

import java.util.Date;

public class Todo {
	//params
	public long id;
	private String description;
	private Date targetDate;
	private boolean isDone;
	public long getId() {
		return id;
	}
	
	//constructor
	public Todo(long id, String description, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	
	//setters and getters
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	public void setId(long id) {
		this.id = id;
	}
		
}
