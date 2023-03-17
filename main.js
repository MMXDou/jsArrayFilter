
const list = [374, [435, ['a', 343, 23], "Raymond"], 7854, 98, 98, 98]

const newList = numberSortingFilter(list)
console.log(newList);

function numberSortingFilter(list) {
  const numberList = []   // for adding no repeat number
  let innerList = list     // for store the inner list for next expanding
  let tempArraysList = []  //temp store and transport array

  //use while loop to expand the layers of an array
  //until all layer of the array expanded
  do {
    tempArraysList = []
    listNumberFilter(innerList)
    innerList = tempArraysList
  } while (tempArraysList.length)

  //for each layer of the array, pick the no repeated number
  // expand the next layer of the array, add it to innerList
  function listNumberFilter(list) {
    list.forEach(element => {
      if (Array.isArray(element)) {
        element.forEach((innerElement => {
          tempArraysList.push(innerElement)
        }))
      }
      else if (isNumber(element) && !(numberList.includes(element))) {
        numberList.push(element)
      }
    });
  }

  return numberList.sort((a, b) => a - b)

}

// function to check if the input an boolean
function isNumber(input) {
  return +input === input
}