var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array
  array = addElementToBeginningOfArray(array, element)
  return array
  
  
  
}

function addElementToEndOfArray(array, element) {
  var array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var more_array = [...array, element]
  return more_array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}



