use std::env;
use dotenvy;

/// Named EnvConfig to avoid confusion with rocket::Config
pub struct EnvConfig {
  pub port: u16
}

/// Pulls configuration from environmentto populate a EnvConfig instance and
/// return it.
pub fn from_env() -> EnvConfig {
  // load environment variables (or local .env file)
  dotenvy::dotenv().ok();

  // pull data from environment
  let port_str = env::var("PORT").unwrap_or_else(|_| "8000".to_string());
  let local_port = port_str.parse::<u16>().unwrap_or_default();

  // instantiate struct and return
  let env_config = EnvConfig {
    port: local_port
  };

  return env_config;
}