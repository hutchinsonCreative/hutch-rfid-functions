function isArrayLike(obj) {
    return obj !== null &&
      typeof obj !== 'undefined' &&
      typeof obj.length === 'number' &&
      obj.length >= 0 &&
      Number.isInteger(obj.length);
};


module.exports = {
    isArrayLike
}
  
  