const hre = require("hardhat")
const { verify } = require("../utils/verify")

async function main() {
    const Dao = await hre.ethers.getContractFactory("Dao")
    const dao = await Dao.deploy()

    await dao.deployed()
    console.log("Dao deployed to:", dao.address)

    log("Verifying...")
    await verify(raffle.address, arguments)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
