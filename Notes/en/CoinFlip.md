# CoinFlip

It can be observed that the guessing in the CoinFlip contract is based on the block height, so in order to predict the outcome of the coin flip, one needs to know the block height in advance.

As we know, a contract can invoke another contract and be placed in the same block as the initial invocation. Therefore, an attack contract can be deployed to run the calculation logic in advance and obtain the current block result, which can then be sent to the target contract.