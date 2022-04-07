const newItems = [
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

function foo(arrayOfItems, aNetwork) {
  const transformNetwork = {
    facebook: 'Facebook',
    gplus: 'Google +',
    twitter: 'Twitter',
    ig: 'Instagram'
  }

  return arrayOfItems
    .filter((item) => item.network === aNetwork)
    .map((item) => ({
      displayName: transformNetwork[item.network], // ?? "undefined",
      text: item.text
    }))
}

console.log(foo(newItems, 'facebook'))
console.log(foo(newItems, 'gplus'))
