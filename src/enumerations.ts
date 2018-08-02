/** enumerations */

// Enums and string literal union types should be named using singular nouns
enum CellType {
  DEVIATION_ABSOLUTE, // Use CONSTANT_CASE for enum entities
  DEVIATION_PERCENTAGE
}

type Animal = 'DOG' | 'CAT' | 'AFRICAN_ELEPHANT';
