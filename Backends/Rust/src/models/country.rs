/*
 * Copyright (c) 2026 Hector Mendoza
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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