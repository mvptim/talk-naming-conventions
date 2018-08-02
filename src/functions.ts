/** functions */

// Function names should consist of a verb to indicate the action and an optional subject to indicate the context
interface refillable {
  refill: () => void;
  getFillLevel: () => number;
}

// use opposites to express the opposite
interface ListItem {
  setText: (text: string) => void;
  getText: () => string
}
interface List {
  addItem: (item: ListItem) => void;
  removeItem: (itemOrIndex: ListItem | number) => void;
}

// don't say a thing and make an other thing: a function should only be of one type and its name should indicate it:
interface Person {
  getSex: () => 'male' | 'female'; // providing information
  setHomePlanet: (planet: string) => void; // changing an object's state
  isTallerThan: (person: Person) => boolean; // executing a task and returning the result
}
