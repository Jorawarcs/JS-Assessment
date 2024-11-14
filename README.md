# Blockchain Technology: Ethereum vs. Avalanche

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Findings](#key-findings)
- [Future Work](#future-work)
- [Contributors](#contributors)
- [License](#license)

## Introduction
This project explores the capabilities of **Ethereum** and **Avalanche** blockchain platforms, focusing on their scalability, transaction costs, and performance. The goal is to evaluate how these platforms handle decentralized applications (dApps), particularly in terms of speed, cost, and flexibility.

The project includes the development of two decentralized applications (dApps): 
- **SocioBlock**: A social networking dApp on Ethereum.
- **DegenGaming Marketplace**: An NFT-based gaming marketplace on Avalanche.

## Project Overview
Blockchain technology is transforming various industries by providing a decentralized, secure, and transparent method for managing digital transactions. However, challenges like scalability, high transaction fees, and interoperability between different blockchains still exist.

### Key Objectives
- Compare the scalability, transaction throughput, and costs of Ethereum and Avalanche.
- Develop a custom subnet on Avalanche for optimized performance.
- Deploy smart contracts on Ethereum and Avalanche testnets.
- Analyze the performance of Ethereum’s Sepolia testnet and Avalanche’s Fuji testnet.

## Features
- **SocioBlock**: A dApp that allows users to add and manage friends on the Ethereum blockchain.
- **DegenGaming Marketplace**: A gaming marketplace using Avalanche’s low-cost, high-speed network for trading NFTs.
- **Custom Subnets**: Implementation of custom subnets on Avalanche for improved scalability and performance.
- **Smart Contract Development**: Written in Solidity for Ethereum and using AvalancheJS for Avalanche.

## Technologies Used
- **Blockchain Platforms**: Ethereum, Avalanche
- **Programming Languages**: Solidity, JavaScript
- **Tools & Libraries**: 
  - **Ethereum**: Metamask, Sepolia Testnet, Truffle Suite
  - **Avalanche**: AvalancheJS, Fuji Testnet
- **Development Environment**: Node.js, VS Code
- **Other**: Git, GitHub

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/blockchain-eth-avalanche.git
    cd blockchain-eth-avalanche
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Compile the smart contracts**:
    ```bash
    truffle compile
    ```

4. **Deploy the contracts**:
    - For Ethereum:
      ```bash
      truffle migrate --network sepolia
      ```
    - For Avalanche:
      ```bash
      node deploy_avalanche.js
      ```

## Usage
1. **SocioBlock (Ethereum dApp)**:
    - Open Metamask and connect to the Sepolia testnet.
    - Run the Ethereum dApp:
      ```bash
      npm run start:socioblock
      ```
    - Access the SocioBlock interface via your browser.

2. **DegenGaming Marketplace (Avalanche dApp)**:
    - Connect to the Avalanche Fuji testnet.
    - Run the Avalanche dApp:
      ```bash
      npm run start:degenmarketplace
      ```
    - Use the platform to buy, sell, and trade gaming NFTs.

## Project Structure
