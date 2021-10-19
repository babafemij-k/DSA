export const dayRate = function (ratePerHour) {
  return ratePerHour * 8;
};
console.log(dayRate(89));

export const monthRate = function (ratePerHour, discount) {
  return Math.ceil(ratePerHour * 8 * 22 - ratePerHour * 8 * 22 * discount);
};
console.log(monthRate(89, 0.42));

export const daysInBudget = function (budget, ratePerHour, discount) {
  return Math.floor(budget / (ratePerHour * 8 * (1 - discount)));
};
console.log(daysInBudget(20000, 89, 0.2002));

function applyDiscount(value, percentage) {
  throw new Error("Implement the applyDiscount function");
}
