const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MyToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployToken() {

    // Contracts are deployed using the first signer/account by default
    const [owner] = await ethers.getSigners();

    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = await MyToken.deploy();

    return { mytoken, owner };
  }

  describe("Deployment", function () {
    it("should mint 100 tokens", async function () {
      const { mytoken } = await loadFixture(deployToken);

      expect(await mytoken.totalSupply()).to.equal(100);
    });

 
  });
});
