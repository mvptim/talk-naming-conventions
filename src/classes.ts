/** classes */

class CartItem {} // Use PascalCase for class names
class XmlHttpRequest {} // Use Pascal Case for Acronyms, too
class SubmitButton {} // Include the type of UI component when writing UI classes

abstract class AbstractRenderer {} // Do not use 'Abstract' prefix or 'Base' suffix for abstract classes.
class ButtonRenderer extends AbstractRenderer {} // Include a context of the base class in the name of subclasses

class Bottle {} // Use short but meaningful superclass names. They will be used a lot in the code
class WaterBottle extends Bottle {} // Include what class a subclass is like and how it is different

class Shape {}
class CircleShape extends Shape {} // TODO: should we drop information about superclass when using common subclass names?

class ExcelWriter {}
class ExcelReader {} // Use complementary names for complementary classes
class ExcelParser {} // ExcelParser would be a bad complementary class name to ExcelWriter

class UserManager {} // Do not call everything a manager
class UserStore {} // Give it a specific name that describes the actual purpose of the class
class UserShepherd {} // But do not use unusual metaphors

// This incomplete List shows some good examples of class suffixes, because they describe one specific purpose:
const classSuffixes = [
  'Coordinator',
  'Builder',
  'Writer',
  'Reader',
  'Container',
  'Converter',
  'Factory',
  'Store',
  'Parser',
  'Validator',
]

