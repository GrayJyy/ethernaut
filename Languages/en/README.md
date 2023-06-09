![fighting~](https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 'code')

🌐 [**中文版本**](https://github.com/GrayJyy/ethernaut) 🌐

# Gray's ethernaut solution

This is a repository or a notebook on the topic of Ethernaut solutions and thoughts. All solutions can be found in the "test" folder.



### How to use？

#### Step 1 - Clone the repository

```
git clone git@github.com:GrayJyy/ethernaut.git
cd ethernaut
```

#### Step 2 - Install dependencies

```
pnpm install
```

#### Step 3 - Add your own .env

```shell
PRIVATE_KEY=yourPrivateKey
SEPOLIA_RPC_URL=yourRpcUrl
# Optional
ETHERSCAN_API_KEY=yourEtherscanApiKey
# Optional
COINMARKETCAP_API_KEY=youtCoinMarketcapApiKey
```



#### Step 4 - Run the test cases

```
pnpm hardhat test --network sepolia
```

> How to run the certain test case?  --- `pnpm hardhat test --grep 'it's keyword' --network sepolia`





### Intro
---

1. HelloEthernaut   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/01-HelloEthernaut-test.ts)
2. Fallback   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/02-Fallback-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/en/Fallback.md)
3. Fallout   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/03-Fallout-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/en/Fallout.md)
4. CoinFlip   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/04-CoinFlip-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/en/CoinFlip.md)
5. Telephone   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/05-Telephone-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/en/Telephone.md)