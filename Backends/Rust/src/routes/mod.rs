use rocket::{get};

// tell the compiler to look for and include the module's code
pub mod countries;

/// Maps the root endpoint
#[get("/")]
pub fn index() -> &'static str {
    "Hello World from Rust!"
}