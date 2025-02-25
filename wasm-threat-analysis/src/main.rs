use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn cybersecurity_analysis(input: &str) -> String {
    format!("AI Cybersecurity Analysis: '{}'. Threat detected!", input)
}
