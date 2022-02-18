const counter = require("./counterReducerExample");

test('increments from 0 to 1', () => {
  expect(counter(0, { type: "INCREMENT" })).toEqual(1);
});
test('increments from 1 to 2', () => {
  expect(counter(1, { type: "INCREMENT" })).toEqual(2);
});
test('decrements from 2 to 1', () => {
  expect(counter(2, { type: "DECREMENT" })).toEqual(1);
});
test('decrements from 1 to 0', () => {
  expect(counter(1, { type: "DECREMENT" })).toEqual(0);
});


console.log("Tests passed!");
