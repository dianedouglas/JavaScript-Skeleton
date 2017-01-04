function Thing(initialValue) {
  this.aProperty = initialValue;
}

Thing.prototype.action = function(input) {
  return input;
};

exports.thingModule = Thing;
