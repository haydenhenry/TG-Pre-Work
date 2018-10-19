const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

// In this lesson I learned some key points, including:
// -using the async function will retrun a promise
// -await can only be used in an async function and allows a program to run while waiting for a promise to resolve
// -in a try..catch statement, the code in the try block runs and in the event of an exception or error, the code in the
// catch statement will run.
