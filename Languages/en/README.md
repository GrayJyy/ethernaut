![fighting~](https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 'code')

🌐 [**中文版本**](https://github.com/GrayJyy/ethernaut) 🌐

# Gray's ethernaut solution

---

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
# 可选
ETHERSCAN_API_KEY=yourEtherscanApiKey
# 可选
COINMARKETCAP_API_KEY=youtCoinMarketcapApiKey
```



#### Step 4 - Run the test cases

```
pnpm hardhat test --network sepolia
```

> How to run the certain test case?  --- `pnpm hardhat test --grep 'it关键词' --network sepolia`





### Intro
---

1. [HelloEthernaut](https://github.com/GrayJyy/ethernaut/blob/main/test/01-HelloEthernaut-test.ts)
2. [Fallback](