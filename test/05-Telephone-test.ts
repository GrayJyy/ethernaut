import type { Contract, ContractTransaction } from 'ethers'
import { ethers } from 'hardhat'
import { createChallenge, submitLevel } from '../utils/utils'
import { expect } from 'chai'
describe('Telephone', () => {
  let challenge: Contract
  let attacker: Contract
  beforeEach(async () => {
    const challengeFactory = await ethers.getContractFactory('Telephone')
    const challengeAddress = await createChallenge('0x2C2307bb8824a0AbBf2CC7D76d8e63374D2f8446')
    challenge = challengeFactory.attach(challengeAddress)
    const attackerFactory = await ethers.getContractFactory('TelephoneAttacker')
    attacker = await attackerFactory.deploy(challenge.address)
  })
  it('solve the telephone challenge', async () => {
    const accounts = await ethers.getSigners()
    const eoa = accounts[0]
    const tx: ContractTransaction = await attacker.attack()
    await tx.wait()
    const owner = await challenge.owner()
    expect(eoa.address, 'not change the owner').to.equal(owner)
  })
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true
  })
})
