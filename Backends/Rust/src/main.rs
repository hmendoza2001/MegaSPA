//! Main application file, execution starts here. Invokes Rocket startup
//! functions.
//! Author: Hector Mendoza
//! Requires: Rocket

// import crates
use rocket::{launch};

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

  // mount endpoints to routes (see routes module)
  rocket::custom(rocket_config)
    .mount("/", rocket::routes![
      routes::index,
      routes::countries::countries])
}