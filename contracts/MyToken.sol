// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

address payable public Owner;

    constructor() ERC20("MyToken", "MTK") {
        Owner = payable(msg.sender);
        _mint(Owner, 100); 
    }
}