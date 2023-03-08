package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StocksApplication {

	public static void main(String[] args) {
		SpringApplication.run(StocksApplication.class, args);
	}
	

//	@Autowired
//	private GainersRepository gainersRepository;
//
//	@Override
//	public void run(String... args) throws Exception {
//		
//		this.gainersRepository.save(new Gainers(11,"vinoth",330.2,444.3,44.4,464.59));
//	
//	}


}
