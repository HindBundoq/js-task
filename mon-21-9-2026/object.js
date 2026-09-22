function getObjectProperties(obj) {
  return Object.keys(obj);
}

function getObjectLength(obj) {
  return Object.keys(obj).length;
}

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function convertValuesToUppercase(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      newObj[key] = obj[key].toUpperCase();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function removeNullProperties(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function getSortedProperties(obj) {
  return Object.keys(obj).sort();
}