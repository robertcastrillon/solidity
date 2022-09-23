// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20.sol";

contract AgneexERC20 is ERC20 {

      constructor(uint256 initialSupply) ERC20("AgneexToken","AGTK"){
          _mint(msg.sender, initialSupply);
      }

}