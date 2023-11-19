export function mergeObjects(template, obj) {
  const result = { ...template };
  for (const key in obj) {
    if (obj?.[key]) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        result[key] = mergeObjects(template[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

export function sortArrayOfObjectsByKey(arrayOfObjects, key) {
  return arrayOfObjects.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}
