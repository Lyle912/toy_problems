Array.prototype.isSubsetOf = function (arr) {
  // TO DO: Implement me! 
  return this.every(element => arr.indexOf(element) > -1)
};

const testIsSubsetOf = Array.prototype.isSubsetOf;