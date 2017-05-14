// underbar1

const identity = function(val){
  return val;
}

const first = function(arr, n=1){
  return n === 1 ? arr[0] : arr.slice(0,n);
}

const last = function(arr, n=1){
  return n === 1 ? arr[arr.length - 1] : arr.slice(Math.max(0, arr.length - n));
}

const indexOf = function(arr, target, fromIndex=0){
  let result = -1;
  each(arr, (item, index) => {
    if(index >= fromIndex && result === -1 && item === target){
      result = index;
    }
  });
  return result;
}

const isArrayLike = function(obj){
  let length = obj['length'];
  return typeof length === 'number' && length >= 0;
}

const each = function(obj, callback=identity){
  if(isArrayLike(obj)){
    for(let index = 0; index < obj.length; index++){
      callback(obj[index], index, obj);
    }
  } else {
    for(let key in obj){
      callback(obj[key], key, obj);
    }
  }
}

const map = function(obj, callback=identity){
  const results = [];
  each(obj, (curValue, curIndexOrKey, obj)=>{
    results.push(callback(curValue, curIndexOrKey, obj));
  });
  return results;
};

const pluck = function(obj, key){
  return map(obj, item => item[key]);
};

const reduce = function(obj, callback=identity, initialValue){
  let accumulator = initialValue;
  let initializing = accumulator === undefined;
  each(obj, (currentValue, curIndexOrKey, iteratedObj)=>{
    if(initializing){
      initializing = false;
      accumulator = currentValue;
    } else {
      accumulator = callback(accumulator, currentValue, curIndexOrKey, iteratedObj);
    }
  });
  return accumulator;
};

const contain = function(obj, target){
  return reduce(obj, (wasFound, item)=>{
    return wasFound || item === target;
  }, false);
};

const every = function(obj, callback=identity){
  return reduce(obj, (allPassed, item)=>{
    return allPassed && !!callback(item);
  }, true);
};
 
const some = function(obj, callback=identity){
  return reduce(obj, (anyPassed, item)=>{
    return anyPassed || !!callback(item);
  }, false)
};

const filter = function(obj, callback=identity){
  const results = [];
  each(obj, item=>{
    if(callback(item)){
      results.push(item);
    }
  });
  return results;
}

const reject = function(arr, callback=identity){
  return filter(arr, item => !callback(item));
};

const uniq = function(obj){
  const foundItem = {};
  return filter(obj, item=>{
    return !(item in foundItem) && (foundItem[item] = true)
  });
};

// underbar2

const extend = function(obj){
  each(Array.from(arguments).slice(1), object => {
    each(object, (prop, key) => {
      obj[key] = prop;
    })
  })
  return obj;
}

// let one = {};
// let two = {a: 1, b: 2};
// console.log('extend: ', extend(one, two));

const defaults = function(obj){
  each(Array.from(arguments).slice(1), object => {
    each(object, (prop, key) => {
      if(obj[key] === undefined){
        obj[key] = prop;
      }
    })
  })
  return obj;
}

// let original = {a: 10};
// let copy = {a: 1, b: 2};
// console.log('defaults: ', defaults(original, copy));

const once = function(func){
  let calledOnce = false;
  let res;
  return function(){
    if(!calledOnce){
      res = func.apply(this, arguments);
      calledOnce = true;
    }
    return res;
  }
}

// const add = function(a,b){
//   return a + b;
// }

// let sum = once(add);
// console.log('once: ', sum(1,2));
// console.log('once: ', sum(4,5));

const memoize = function(func){
  const memoFunc = function(){
    const cache = memoFunc.cache;
    const key = JSON.stringify(arguments);
    if(!cache[key]){
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  }
  memoFunc.cache = {};
  return memoFunc;
}

const delay = function(func, wait){
  const args = Array.prototype.slice.call(arguments, 2);
  setTimeout(()=>{
    func.apply(null, args);
  }, wait);
}

// let add = function(a,b){return a + b};
// let sum = delay(add, 2000);
// console.log(add(1,2));

const shuffle = function(arr){
  let arr2 = arr.slice();
  let len = arr2.length, c, n;
  while(len){
    c = Math.floor(Math.random() * len--);
    n = arr2[len];
    arr2[len] = arr2[c];
    arr2[c] = n;
  }
  return arr2;
}

