const reduceMap = (collection, fn, initialAcc) => {
  let acc = initialAcc;

  collection.forEach((value, key) => {
    acc = fn(acc, value, key, collection);
  });

  return acc;
};

module.exports = reduceMap;
