'use strict';
/**
 * @param  {} array
 * @param  {} value
 * @param  {} =>{letlow=0;lethigh=arr.length-1;while(high>low
 * @param  {} {letmid=Math.floor((high+low
 * @param  {} /2
 * @param  {} ;if(array[mid]===value
 * @param  {} {returnmid;}elseif(array[mid]>value
 * @function binarySearch
 */


const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;
  if (high > low) {
    let mid = Math.floor((high + low) / 2);
    if (array[mid] === value) {
      return mid;
     
    } else if (array[high] === value) {
      return high;
    } else if (array[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;