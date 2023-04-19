/*
In this challenge, you will create a function that 
takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.
*/


// Solution

function filter_list(l) {
  return l.filter(Number.isInteger);
}

// or

function filter_list(l) {
  return l.filter(v => typeof v === "number")
}