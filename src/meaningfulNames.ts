/** meaningful names */

// Do not call everything el, element, value, acc, func, helper or other generic shit
// Meaningful names are important to better understand the context without the need of skimming outer functions
// consider replacing 'acc' with 'totalHeight' and 'el' with 'person' in the following Example:
const totalHeight = [{ height: 1.7, hairColor: 'brown' }, { height: 1.9, hairColor: 'brown'}]
  .reduce((acc, el) => {
    acc += el.height;
    return acc;
  }, 0);

// Use descriptive names (clarity over shortness)
const n = 1; // Meaningless
const nErr = 1; // Ambiguous abbreviation
const nCompConns = 1; // Ambiguous abbreviation
const wgcConnections = 1; // Only your group knows what this stands for
const pcReader = {}; // Lots of things can be abbreviated "pc"
const cstmrId = 1; // slows down the reading flow
const bIsHuman = false; // Hungarian notation slows down the reading flow, too
const helper = ()=>{/*..*/} // what does this helps me with?

