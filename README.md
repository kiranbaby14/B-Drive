# B-Drive

A google drive clone using Blockchain technology.

## Tech-stacks used
  - React
  - HardHat
  - Solidity
  - Pinata (For IPFS storage)

## Features Implemented
  - Upload images to Pinata (an IPFS implementation)
  - Display the saved images on the React application
  - Share access to other account users in the network
  - Unshare access 

## Screenshots
![image](https://github.com/kiranbaby14/B-Drive/assets/50899339/ffb85f4f-664c-4718-883d-44689eb1a89f)
![Screenshot 2023-07-29 005556](https://github.com/kiranbaby14/B-Drive/assets/50899339/424c65ec-581e-4d5d-a9ae-e66fc2ca0b14) ![Screenshot 2023-07-29 005636](https://github.com/kiranbaby14/B-Drive/assets/50899339/aea8125e-b4fd-406c-8f47-8a6093a088d4)

## Running 
 - Run the hardhat node
   ```
   npx harhat node
   ```
  - Deploy the contract to the hardhat blockchain network
   ```
   npx hardhat run --network localhost scripts/deploy.js
   ```
  - After deploying the contract copy the smart contract address and paste it in the contractAddress in the code section https://github.com/kiranbaby14/B-Drive/blob/master/client/src/App.js#L37
  - Run the React application
    - cd into client folder
    - Run the React application
        ```
          npm start
        ```
