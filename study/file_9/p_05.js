const now = new Date(2021, 0, 31); // January 31, 2021

const twoDaysLater = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 2
);
console.log(twoDaysLater.toDateString());
