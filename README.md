# Web3 OFinder DApp - README

Welcome to the **Web3 OFinder DApp** project repository! This decentralized
application (DApp) is designed for reporting lost documents such as
identification cards and driver's licenses. The information on the document is
hashed and stored. When a person who has found a document enters their
information, a hash comparison is performed. If the data matches, the specified
amount of locked SUI tokens, determined by the person reporting the loss, is
transferred to the individual who found the document.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Devnet Contracts Address](#devnet-contracts-address)
- [Testing](#testing)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Web3 OFinder DApp** The application facilitates the secure and rapid
recovery of lost documents through its user-friendly interface and transparent
operation. It prevents the dissemination of data on the internet.

## Features

- View the number of active appeals.
- Post a lost document announcement.
- Have fair rewards.
- Integrated with SUI wallets.
- zkLogin (upcoming feature).

## Getting Started

Follow these steps to set up the project locally and start participating in web3
auctions.

### Prerequisites

1. Node.js: Ensure Node.js is installed. Download it from
   [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/oguzhaniptes/Sui-Bootcamp-Final-Project.git
```

2. Navigate to the project directory:

```bash
  cd Sui-Bootcamp-Final-Project
```

3. Install required npm packages:

```bash
 npm install
```

## Usage

1. Start the development server:

```bash
 npm run dev
```

2. Open your web browser and navigate to `http://localhost:3000` to access the
   DApp.

3. Connect your Sui wallet to the DApp.

4. Post an announcement or claim your reward for the found document.

## Devnet Contracts Address

The smart contracts in this project facilitate the auction process. They handle
bids, auction creation, and winner determination. These contracts are deployed
on the Ethereum blockchain.

- `finder.move`:

  - **Contact ID:**
    0x03ab598f0997899fba06a23f7739492c74e52b0e256a87207c438139b922694d,
  - **Ofinder Object ID**
    0x767559cbf5ac92435f91fddf9fbac0dfc13ffe7007670670e177181e0d40d5c8

## Testing

Test not ready yet !

<!-- Smart contract tests are located in the `test` folder. These tests ensure the
correct functioning of the smart contract. To run the tests, follow these steps:

1. Open a terminal in the project directory.
2. Run the following command to execute the tests:

```bash
truffle test
```

This command will initiate the smart contract tests and display the results in
the terminal.

![image](https://github.com/Rise-In/XXX-Bootcamp-FinalCase/assets/140731987/8dc52183-626c-4f39-9408-a37ba496a345) -->

## Frontend

The DApp frontend is built using modern web technologies including React.js. It
provides an intuitive and interactive user interface for auction participation.

- **React.js**: Powers the DApp's user interface.
- **@mysten/create-dapp** is a CLI tool that helps you to create a new dApp
  project.
- **@mysten/sui.js**: Sui Wallet Kit is a library that makes it easy to connect
  your dApp to Sui wallets.
- **@mysten/dapp-kit** The Sui dApp Kit is a set of React components, hooks, and
  utilities that make it easy to build a dApp for the Sui ecosystem. It provides
  hooks and components for querying data from the Sui blockchain, and connecting
  to Sui wallets.
- **Sui Wallet**: Sui wallet browser extension.

<!-- ## Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make changes and test thoroughly.
4. Commit with clear and concise messages.
5. Push changes to your fork.
6. Submit a pull request describing your changes. -->

## License

This project is licensed under the [MIT License](LICENSE).

---
