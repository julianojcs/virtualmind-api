// Given the following array of elements:

newItems = [
  {
    network: 'facebook',
    text: 'post number 1'
  },
  {
    network: 'twitter',
    text: 'some twitter text'
  },
  {
    network: 'gplus',
    text: 'some gplus stuff'
  },
  {
    network: 'facebook',
    text: 'post number 2'
  }
]

// Write a function with this signature:
// (arrayOfItems, aNetwork) => newArray

function foo(arrayOfItems, aNetwork) {
  // Write code here
}

// That, given an array and a network, transforms the given array into the following structure:

// example:
// foo(newItems, 'facebook')

// outputs:
// finalsItems = [
//   {
//     displayName: 'Facebook'
//     text: 'post number 1'
//   },
//   {
//     displayName: 'Facebook',
//     text: 'post number 2'
//   },
// ]

// foo(newItems, 'gplus')

// outputs:
// finalsItems = [
//   {
//     displayName: 'Google +',
//     text: 'some gplus stuff'
//   }
// ]

// You will need to define your own way to consistently transform `network` into `displayNames`

console.log(foo(newItems, 'facebook'))
console.log(foo(newItems, 'gplus'))
