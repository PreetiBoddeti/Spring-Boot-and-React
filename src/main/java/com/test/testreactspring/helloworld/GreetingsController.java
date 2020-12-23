package com.test.testreactspring.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class GreetingsController {
	@RequestMapping(method=RequestMethod.GET, path="/greetings")
	public String greetings() {
		return "Hello...!!!";
	}
	
	@GetMapping(path="/helloworld-bean")
	public HelloWorldBean HelloWorldBean() {
		return new HelloWorldBean("Hey, This is Preeti..!!!");
	}

}
