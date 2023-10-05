import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "devnet",
  networks: {
    hardhat: {
    },
    devnet: {
      url: "https://rpc.devnet.lukso.dev",
      accounts: [
          "<key>"
      ]
    }
  },
  solidity: "0.8.19",
};

export default config;
