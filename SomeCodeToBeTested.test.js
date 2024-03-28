const { sum, fetchData, fetchPromiseData } = require("./SomeCodeToBeTested");

/*
testing basic function using expect and toBe matcher
*/
test("adds 1+2=3", () => {
  expect(sum(1, 2)).toBe(3);
});

/*
In Jest, the done function is passed to asynchronous test functions to notify Jest
when an asynchronous operation has completed. This is particularly useful for 
testing asynchronous code such as promises or code that involves callbacks.

When you have an asynchronous test, you typically call done() inside the test 
function once your asynchronous operations are complete. This tells Jest that 
the test has finished and Jest can proceed to the next test or finish the test
suite.
*/

test("async fetchData = data", (done) => {
  function callback(data) {
    expect(data).toBe("data");
    done();
  }
  fetchData(callback);
});

test("test promise fetchData using resolves = data", () => {
  expect(fetchPromiseData()).resolves.toBe("data");
});

test("test promise fetchData using async await = data", async () => {
  const data = await fetchPromiseData();
  expect(data).toBe("data");
});

/*
Mocking in Jest involves replacing dependencies or parts of your code with mock 
functions or objects in order to isolate the code you're testing and control 
its behavior during testing. This is particularly useful when you want to 
test a specific function or module in isolation without relying on its 
dependencies, or when you want to simulate certain behaviors or responses.

There are several ways to perform mocking in Jest:

1. Manual Mocks:
----------------- 
You can create manual mocks by creating a __mocks__ directory adjacent 
to your modules. Jest will automatically use these mock files instead 
of the actual module when running tests. You can also manually mock 
modules by using jest.mock().

2. Mock Functions: 
--------------------
Jest provides the jest.fn() method to create mock 
functions. These functions can be used to replace dependencies or 
functions within your code. You can also specify return values or 
behaviors for these mock functions using Jest's API.

3. Mock Modules:
----------------- 
You can use jest.mock() to mock entire modules or libraries. 
Jest will replace the module with a mock implementation during the test run.

4. Mock Implementation:
------------------------ 
Jest allows you to provide custom implementations for modules or functions
using jest.mock() with the jest.fn() method.

5. Spying:
------------- 
Jest provides the jest.spyOn() method to create spies on 
existing functions or methods. Spies allow you to observe the 
behavior of a function without affecting its implementation.


example of module mock
// myModule.js
export function fetchData() {
  // Some asynchronous operation
}

// myModule.test.js
import { fetchData } from './myModule';

// Mocking fetchData function
jest.mock('./myModule', () => ({
  fetchData: jest.fn()
}));

// Test case
test('fetchData should be called', () => {
  fetchData(); // This will use the mock implementation
  expect(fetchData).toHaveBeenCalled();
});
*/

test("test mock function of jest", () => {
  const mockedFn = jest.fn((x) => x * 100);
  expect(mockedFn(1)).toBe(100);
  expect(mockedFn).toHaveBeenCalledWith(1);
});

test("spying on a method of an object", () => {
  const video = {
    play: () => {
      return true;
    },
    pause: (timeStamp) => {
      return false;
    },
  };

  const playSpy = jest.spyOn(video, "play");
  const pauseSpy = jest.spyOn(video, "pause");
  video.play();
  video.pause(1.23);
  expect(playSpy).toHaveBeenCalled();
  expect(pauseSpy).toHaveBeenCalledWith(1.23);
});
