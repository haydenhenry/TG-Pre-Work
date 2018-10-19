console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');


// JavaScript is an asynchronous language, meaning it has non-blocking properties.
// It uses an event loop to handle asynchronous function calls. When a program runs,
// function calls are added to a stack. The functions that need to wait for server
// requests are sent to a different queue. When the stack is cleared, those queued
// functions are then executed. We can use the event loop to make a better browsing
// experience by deciding when to call functions and how to handle asynchronous events.
// AJAX is short for Asynchronous JavaScript and XML.
