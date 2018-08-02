/** consistence */

// Do not use synonyms in the same project
interface pathList {
  addPath: (path: string) => void
  removePath: (path: string) => void
}
interface nameList {
  appendName: (path: string) => void
  deleteName: (path: string) => void
}

// adapt your style to the code around you so people can concentrate on what you're saying rather than on how you're saying it
const dogCount = 1,
  catCount = 2,
  kiwiCount = 3;
const horseCount = 4;

// please, ...
const palette = {
  'main': '#ff0000',
  'dark': '#f9f9f9',
  light: '#fefefe'
}

// ... be ...
class StuffManager
{
  manageStuff() {

  }
}

// ... consistent!
const genders = [
  "xi",
  "ze",
  "shu",
  'apache'
]
