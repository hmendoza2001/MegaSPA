package com.example.javaApi.repositories;

import com.example.javaApi.entities.Country;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
//public interface CountryRepository extends JpaRepository<Country, Long>
public interface CountryRepository extends MongoRepository<Country, String>
{
}