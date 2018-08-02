/** events */

// Always consider affect (intend to perform an action) vs. effect (reaction to an action)
class Button {
  private handleClick() {} // Event handler functions should be named like an reaction to the event
}

// Always include the event's context
class TabStrip {
  private handleButtonClick(buttonIdx: number) {}
}

// Do not call an event handler ...Handler
interface clickable {
  clickHandler: Function
}


/** One of many possible ways in one of many possible use cases: */
interface ButtonConfig {
  onClick: () => void; // In this example interface callback function are named like: 'on' + event name
}

class DeleteButton {
  constructor(props: ButtonConfig) {}
}

class ListItem {
  private deleteButton = new DeleteButton({
    onClick: () => {this.handleDeleteButtonClick()}
  })

  private handleDeleteButtonClick() {} // Private handler methods are named like: 'handle' + event name
}
