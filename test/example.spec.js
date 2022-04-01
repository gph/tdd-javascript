var chai = require('chai');
var expect = chai.expect;

var Data = require("../src/DataSource.js")

describe("first lib", () =>{
	describe("first example", () => {
		it("Data Example equals test", () =>{
			expect(Data.dataTestReturnExample()).to.equals("test");
		});
});
