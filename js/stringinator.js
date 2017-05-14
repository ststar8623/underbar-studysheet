// stringinator //

const first = function(str, n = 1) {
  // Your code goes here
  return _.first(str, n);
};

const last = function(str, n = 1) {
  // Your code goes here
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  return _.reject(str, letter => letter === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, letter => letter === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
  return _.every(str, char => !isNaN(parseInt(char, 10));
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.filter(str, num => !isNaN(parseInt(num, 10)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {
  // Your code goes here
  return _.reduce(str, (obj, currentValue)=>{
    obj[currentValue] === undefined ? obj[currentValue] = 1 : obj[currentValue]++;
    return obj;
  }, {});
};

const dedup = function(str) {
  // Your code goes here
  return _.uniq(str).join('');
};