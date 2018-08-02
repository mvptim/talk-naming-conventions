/** interfaces */

// interfaces can be of two types and should be named accordingly:
interface Car { // abstraction
  startEngine: Function;
}

interface serializable { // description of a feature
  toJson: Function;
}

class Sportscar implements Car, serializable {
  toJson() {}
  startEngine() {}
}

/** Do not use Hungarian Prefixes: */
// It reduces the benefits of using code editors that support completion on variable names, for the programmer has to
// input the type specifier first, which is more likely to collide with other variables
class Dog implements Iserializable {}

// It slows down the reading flow
interface Iserializable {}

// The gungarian notation is redundant when type-checking is done by the compiler
interface loggable {
  log: Function;
}

// Modern IDEs display variable types, making the notation largely obsolete
class Person implements serializable {
  toJson() {}
}

// When names are following a consistent naming scheme like serializable, loggable, ... the type can be deduced
class Fish implements serializable, loggable {
  toJson() {}
  log() {}
}