// INTRO TO EVENTS
const btn = document.querySelector('#btn');

// function handleClick() {
// 	console.log(`Button clicked!`);
// }
// btn.addEventListener('click', handleClick);

btn.addEventListener('click', () => console.log(`Button clicked!`));

// EVENT FLOW
// Event Capturing
// Target
// Event Bubbling

// EVENT OBJECT
// bubbles: true if the event bubbles
// cancelable: true if default behavior of the event can be canceled
// currentTarget: the current element on which the event is firing
// defaultPrevented: return true if the preventDefault() has been called
// detail: more information about the event
// eventPhase: 1 for capturing phase, 2 for target and 3 for bubbling
// preventDefault(): cancel the default behavior of the event. This method only effective if the cancelable property is true
// stopPropagation(): cancel any further event capturing or bubbling. This method only can be used if the bubbles property is true.
// target: the target element of the event
// type: the type of event that was fired
