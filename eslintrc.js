// quotes from https://github.com/floored/flbin/wiki/Standards:-Javascript
module.exports = {
  "env": {
    "browser": true
  },
  "rules": {
    // * Whitespace
    // Use soft tabs set to 2 spaces.
    "indent": [
      "error",
      2
    ],
    // Always put spaces around binary operators
    "space-infix-ops": [
      "error"
    ],
    // Always put a space between if, for, etc. and the following (, or everyone will shun you.
    "keyword-spacing": [
      "error",
      { after: true, before: true }
    ],
    "object-curly-spacing": [
      "error", "always"
    ],

    // * Blocks
    // Braces are required for all multi-line blocks.
      "curly": [
      "error", "multi-line"
    ],
    //No extra line returns; it wastes vertical space and can interact poorly with JavaScript's semicolon insertion.
      "brace-style": [
      "error"
    ],

    // * Equality & Type Checking
    // Use === and !== instead of == and !=
      "eqeqeq": [
      "error"
    ],
    // * Semicolons: Use them
      "semi": [
      "error", "always"
    ]
  }
}
