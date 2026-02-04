use crate::{models::country::get_country_list};

pub fn get_countries() -> String {
    return get_country_list();
}