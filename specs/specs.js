// Tests for business object prototype declarations. 

describe("Thing Object", function() {
  describe("initialize", function() {
    it("A Thing object can be created and a method on it can be run.", function() {
      var input = "Test Input";
      var simpleThing = new Thing("get started");
      var output = simpleThing.action(input);
      output.should.equal("Test Input");
    });
  });
});