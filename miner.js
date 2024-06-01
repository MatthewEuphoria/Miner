const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

// Load the ABI from the contract file
const abiPath = path.join(__dirname, "MineableERC20.json");
const abi = JSON.parse(fs.readFileSync(abiPath));

// Replace with your contract address
const contractAddress = "0xEa62886E5580d005fe9cd5db1e41D93Dc0771300";

// Replace with your provider (e.g., Infura, Alchemy, or local node)
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Replace with your wallet private key
const privateKey = "YOUR_PRIVATE_KEY";
const wallet = new ethers.Wallet(privateKey, provider);

// Initialize the contract
const contract = new ethers.Contract(contractAddress, abi, wallet);

async function mine() {
    const currentChallenge = await contract.currentChallenge();
    const difficulty = await contract.difficulty();
    const address = wallet.address;

    console.log(`Current Challenge: ${currentChallenge}`);
    console.log(`Difficulty: ${difficulty.toString()}`);
    console.log(`Mining with address: ${address}`);

    let nonce = 0;
    while (true) {
        const hash = ethers.utils.keccak256(
            ethers.utils.defaultAbiCoder.encode(
                ["bytes32", "address", "uint256"],
                [currentChallenge, address, nonce]
            )
        );
        if (BigInt(hash) < BigInt(difficulty)) {
            console.log(`Found valid nonce: ${nonce}`);
            console.log(`Hash: ${hash}`);
            try {
                const tx = await contract.mine(nonce);
                console.log("Transaction sent:", tx.hash);
                await tx.wait();
                console.log("Transaction confirmed");
                break;
            } catch (error) {
                console.error("Error submitting transaction:", error);
                break;
            }
        }
        nonce++;
    }
}

mine().catch(console.error);
