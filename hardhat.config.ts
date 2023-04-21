import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { config as getConfig } from 'dotenv';
import 'hardhat-deploy';

getConfig();
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: '0.8.0' }, { version: '0.8.9' }] },
  defaultNetwork: 'localhost',
  networks: {
    localhost: { chainId: 31337 },
    hardhat: { chainId: 31337 },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: { apiKey: ETHERSCAN_API_KEY },
  gasReporter: { enabled: false }, // if its true,it will take long time to test
  mocha: { timeout: 50000 },
  namedAccounts: { deployer: { default: 0, 1: 0 }, player: { default: 1 } },
};

export default config;
