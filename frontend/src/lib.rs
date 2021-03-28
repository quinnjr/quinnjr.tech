extern crate wee_alloc;
use pulldown_cmark::{html, Options as ParserOptions, Parser};
use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

/// Parse an input &str to a valid String containing HTML.
///
/// @TODO: Add support for options enum
#[allow(dead_code)]
#[wasm_bindgen]
pub fn parse(input: &str) -> String {
  let options = ParserOptions::empty();
  let parser = Parser::new_ext(input, options);

  let mut buffer: String = String::new();
  html::push_html(&mut buffer, parser);

  return buffer;
}

/// Enum representing the bitflag options available to the
/// underlying `pulldown-cmark` parser.
pub enum Options {
  EnableTables,
  EnableFootnotes,
  EnableStrikethrough,
  EnableTasklist,
  EnableSmartPunctuation
}

#[cfg(test)]
mod tests {
  use super::parse;

  #[test]
  fn it_should_correctly_parse() {
    let markdown_input: &str = "Hello world, this is a complicated *very simple* example.";

    let output: String = parse(markdown_input);

    let expected: &str = "<p>Hello world, this is a complicated <em>very simple</em> example.</p>\n";

    assert_eq!(expected, &output);
  }
}
