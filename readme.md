Requirements
Node.js
NPM
An Infura Project ID or another  provider URL
A private key with some BERA for gas fees

Note
This script is for testing purposes only. Use at your own risk.



# MineableERC20 Miner

This is a miner script for the MineableERC20 smart contract. Users can use this script to mine tokens by solving proof-of-work challenges.

## MineableERC20 Contract

The `MineableERC20` smart contract is an ERC-20 token that incorporates a Proof-of-Work (PoW) mechanism similar to Bitcoin. Users can mine new tokens by solving computational puzzles.

### Key Features:
- **ERC-20 Standard**: Implements the standard ERC-20 functionality.
- **Proof-of-Work Mining**: Users can mine new tokens by solving a PoW challenge. The first user to find a valid nonce gets rewarded with new tokens.
- **Adjustable Difficulty**: The difficulty of the PoW challenge can be adjusted by the contract owner to maintain a consistent mining rate.
- **Halving Mechanism**: Similar to Bitcoin, the reward for mining new tokens halves after every 210,000 tokens have been mined.

## Miner Script

The miner script is a simple Node.js application that allows users to mine tokens from the `MineableERC20` contract by finding valid nonces.

### How It Works:
1. **Connects to the berachain Network**: Uses a provider (e.g., Infura) to connect to the network.
2. **Loads Contract ABI**: Loads the ABI of the `MineableERC20` contract to interact with it.
3. **Fetches Current Challenge and Difficulty**: Retrieves the current PoW challenge and difficulty from the contract.
4. **Finds Valid Nonce**: Iteratively tries different nonces until it finds one that solves the PoW challenge.
5. **Submits Solution**: Once a valid nonce is found, the script sends a transaction to the contract to mine new tokens.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/MineableERC20Miner.git
   cd MineableERC20Miner
   npm install


2. Replace the placeholder values in miner.js with your own:

YOUR_INFURA_PROJECT_ID
YOUR_PRIVATE_KEY


3. Run the miner script
   ```node miner.js


