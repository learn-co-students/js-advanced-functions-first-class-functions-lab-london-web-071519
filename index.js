const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => {
    return function() {
        return number * number
    }
}

const fareDoubler = (number) => {
    return number * 2
}

const fareTripler = (number) => {
    return number * 3
}

const selectDifferentDrivers = (array, func) => {
    return func(array)
}