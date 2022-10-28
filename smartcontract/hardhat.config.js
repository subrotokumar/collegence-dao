require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGON_MUMBAI = process.env.POLYGON_MUMBAI
const POLYGONSCAN_API = process.env.POLYGONSCAN_API

module.exports = {
    solidity: "0.8.7",
    networks: {
        mumbai: {
            url: POLYGON_MUMBAI,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: POLYGONSCAN_API,
    },
}
