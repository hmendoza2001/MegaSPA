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