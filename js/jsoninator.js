const isObject = function(obj){
  // This is needed to disambiguate a plain object literal from other types of objects.
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const stringifyArray = function(obj){
  return '[' + _(obj).map(function(item) {
    return stringify(item);
  }).join(',') + ']';
};

const stringifyObject = function(obj){
  const strings = [];

  _.each(obj, function(item, key) {
    if(_.isUndefined(item) || _.isFunction(item)) {
      return;
    }

    strings.push(stringify(key) + ':' + stringify(item));
  });

  return '{' + strings.join(',') + '}';
};

const stringify = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (isObject(obj)) {
    return stringifyObject(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  } else {
    return obj + '';
  }
};