package com.example.javaApi.entities;

//import jakarta.persistence.*;
//import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

//@Entity
//@Table(name = "country")
@Document(collection = "countries")
public class Country
{
  //@Id
  //private Long id;

  // Note: In mongo, excluding thisa field automatically makes a projection to
  // exclude it
  //@Id
  //private String id;

  //@Column(nullable = false)
  private String country;

  //@Column(nullable = false)
  private int value;

  //public Long getId()
  //public String getId()
  //{
  //  return id;
  //}

  //public void setId(Long id)
  //public void setId(String id)
  //{
  //  this.id = id;
  //}

  public String getCountry()
  {
    return country;
  }

  public void setCountry(String country)
  {
    this.country = country;
  }

  public int getValue()
  {
    return value;
  }

  public void setValue(int value)
  {
    this.value = value;
  }
}