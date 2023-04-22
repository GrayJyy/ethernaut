![fighting~](https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 'code')

🌐 [**English Version**](https://github.com/GrayJyy/ethernaut/blob/main/Languages/en/README.md) 🌐

# Gray's ethernaut solution

这是一个关于ethernaut的题解和思考的仓库或者说笔记，所有的解决方案都在test文件夹中。



### 如何使用？

#### 第一步 - 克隆仓库

```
git clone git@github.com:GrayJyy/ethernaut.git
cd ethernaut
```

#### 第二步 - 安装依赖

```
pnpm install
```

#### 第三步 - 添加自己的.env

```shell
PRIVATE_KEY=yourPrivateKey
SEPOLIA_RPC_URL=yourRpcUrl
# Optional
ETHERSCAN_API_KEY=yourEtherscanApiKey
# Optional
COINMARKETCAP_API_KEY=youtCoinMarketcapApiKey
```



#### 第四步 - 运行测试用例

```
pnpm hardhat test --network sepolia
```

> 如何运行单个测试用例?  --- `pnpm hardhat test --grep 'it关键词' --network sepolia`





### 目录
---

1. HelloEthernaut   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/01-HelloEthernaut-test.ts)
2. Fallback   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/02-Fallback-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/cn/Fallback.md)
3. Fallout   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/03-Fallout-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/cn/Fallout.md)
4. CoinFlip   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/04-CoinFlip-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/cn/CoinFlip.md)
5. Telephone   [Code](https://github.com/GrayJyy/ethernaut/blob/main/test/05-Telephone-test.ts)     [Note](https://github.com/GrayJyy/ethernaut/blob/main/Notes/cn/Telephone.md)
