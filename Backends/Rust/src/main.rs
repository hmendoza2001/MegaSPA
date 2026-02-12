/*
 * Copyright (c) 2025 Hector Mendoza
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

//! Main application file, execution starts here. Invokes Rocket startup
//! functions.
//! Author: Hector Mendoza
//! Requires: Rocket

// import crates
use rocket::{launch};
use rocket::http::Method;
use rocket_cors::{AllowedOrigins, CorsOptions};

// tell the compiler to look for and include the modules' code
mod config;
mod routes;
mod controllers;
mod models;

/// Main function to initialize Rocket.
#[launch]
fn rocket() -> _ {
  // initialize configuration module
  let config = config::config::from_env();

  // configure Rocket based on our config module
  let rocket_config = rocket::Config {
    port: config.port,
    //address: Ipv4Addr::new(127, 0, 0, 1).into(),
    ..rocket::Config::debug_default() // use other defaults for the debug profile
  };

  let cors = CorsOptions::default()
    .allowed_origins(AllowedOrigins::all())
    .allowed_methods(
        vec![Method::Get, Method::Post, Method::Put, Method::Delete]
            .into_iter()
            .map(From::from)
            .collect(),
    )
    .allow_credentials(true)
    .to_cors()
    .expect("Error creating CORS fairing");

  // mount endpoints to routes (see routes module)
  rocket::custom(rocket_config)
    .attach(cors)
    .mount("/", rocket::routes![
      routes::index,
      routes::countries::countries])
}