//! just return a hardcoded list for now
//! TODO: Fetch these values from DB
use serde::Serialize;
use serde_json;

// serialize for json conversion
#[derive(Serialize)]
pub struct Country {
  pub country: String,
  pub value: i32,
}

///
pub fn get_country_list() -> String {
  let country_list = vec![
    Country { country: String::from("USA"), value: 2025 },
    Country { country: String::from("China"), value: 1882 },
    Country { country: String::from("Japan"), value: 1809 },
    Country { country: String::from("Germany"), value: 1322 },
    Country { country: String::from("UK"), value: 1122 },
    Country { country: String::from("France"), value: 1114 },
    Country { country: String::from("India"), value: 984 },
    Country { country: String::from("Spain"), value: 711 },
    Country { country: String::from("Netherlands"), value: 665 },
    Country { country: String::from("South Korea"), value: 443 },
    Country { country: String::from("Canada"), value: 441 },
  ];

  // serde_json::to_string returns Result which is defined as follows:
  // pub enum Result<T> {
  //   Ok(T),
  //   Err(Error),
  // }
  // we call unrap_or_default to just get the Ok option
  let result = serde_json::to_string(&country_list);
  let value = result.unwrap_or_default();

  return value;
}