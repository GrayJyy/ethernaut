import { ethers } from 'hardhat'
import { createChallenge, submitLevel } from '../utils/utils'
import type { Contract, ContractTransaction } from 'ethers'
import { expect } from 'chai'

describe('Token', () => {
  let challenge: Contract
  beforeEach(async () => {
    const challengeFactory = await ethers.getContractFactory('Token')
    const challengeAddress = await createChallenge('0x478f3476358Eb166Cb7adE4666d04fbdDB56C407')
    challenge = challengeFactory.attach(challengeAddress)
  })
  it('solve the token challenge', async () => {
    const accounts = await ethers.getSigners()
    const eoa = accounts[0]
    const balance = await challenge.balanceOf(eoa.address)
    console.log(balance.toString())
    const tx: ContractTransaction = await challenge.transfer('0x478f3476358Eb166Cb7adE4666d04fbdDB56C407', 21)
    await tx.wait()
    const balance2 = await challenge.balanceOf(eoa.address)
    console.log(balance2.toString())
  })
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true
  })
})
