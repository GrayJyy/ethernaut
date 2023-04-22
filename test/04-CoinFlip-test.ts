import { ethers } from 'hardhat'
import { createChallenge, submitLevel } from '../utils/utils'
import type { Contract, ContractTransaction } from 'ethers'
import { expect } from 'chai'

describe('CoinFlip', () => {
  let attacker: Contract
  let challenge: Contract
  let count = 0
  beforeEach(async () => {
    const challengeFactory = await ethers.getContractFactory('CoinFlip')
    const challengeAddress = await createChallenge('0xA62fE5344FE62AdC1F356447B669E9E6D10abaaF')
    challenge = challengeFactory.attach(challengeAddress)
    const attackerFactory = await ethers.getContractFactory('CoinFlipAttacker')
    attacker = await attackerFactory.deploy(challenge.address)
  })
  it('solves the coin flip challenge', async () => {
    for (let i = 0; i < 10; i++) {
      const tx: ContractTransaction = await attacker.attack()
      await tx.wait()
      console.log(await ethers.provider.getBlockNumber())
      count++
      const winCount = await challenge.consecutiveWins()
      console.log(winCount.toString())
      expect(String(count)).to.equal(winCount.toString())
    }
  })
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true
  })
})
