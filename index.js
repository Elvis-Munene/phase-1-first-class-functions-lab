// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(twoDrivers){
return twoDrivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(lastwo){
    return lastwo.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

console.log(selectingDrivers);

const createFareMultiplier = function(quad){
    return function multiplyfare(fare){
        return fare*quad;
    }
}
console.log(createFareMultiplier(4));


const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare)
    }


    const fareTripler = function (fare){
        return createFareMultiplier(3)(fare)
        }

        const selectDifferentDrivers = function(drivers,func) {
            return func(drivers);
        }

    
    