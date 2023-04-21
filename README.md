> 这是一个关于ethernaut的题解和思考的仓库或者说笔记，所有的解决方案都在test文件夹中。



### 如何使用？

#### 第一步 - 克隆仓库

`git clone git@github.com:GrayJyy/ethernaut.git`

`cd ethernaut`

#### 第二步 - 安装依赖

`pnpm install`

#### 第三步 - 添加自己的.env

```shell
PRIVATE_KEY=yourPrivateKey
SEPOLIA_RPC_URL=yourRpcUrl
# 可选
ETHERSCAN_API_KEY=yourEtherscanApiKey
# 可选
COINMARKETCAP_API_KEY=youtCoinMarketcapApiKey
```



#### 第四步 - 运行测试用例

`pnpm hardhat test --network sepolia`

> 如何运行单个测试用例?  --- `pnpm hardhat test --grep 'it关键词' --network sepolia`





### 目录

1. [HelloEthernaut](https://github.com/GrayJyy/ethernaut/blob/main/test/01-HelloEthernaut-test.ts)
2. [Fallback](https://github.com/GrayJyy/ethernaut/blob/main/test/02-Fallback-test.ts)





