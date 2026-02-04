
use rocket::{get};
use crate::{controllers};

#[get("/v1/countries")]
pub fn countries() -> String {
  return controllers::country_controller::get_countries();
}