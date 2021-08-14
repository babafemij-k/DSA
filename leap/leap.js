//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Year must be divisible by 4 and not divisible by 100
// If year is divisible by 4 and 100, then year must also be divisible by 400
export const isLeap = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};
