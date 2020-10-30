# HackAtom-V
This repository is for HackAtom-V Hackathon


## sampark

Losing a loved one is like having the rug swept from under you. We make plans for the day, and do not think twice about how those plans can be taken away in the blink of an eye. I never thought much about it myself, until I was faced with the shock, and undeniable truth of death. I do not think anyone really thinks about tragedy until they are actually faced with shocking news. It is amazing how we take life for granted. The tragedy never goes away. You just learn how to cope with it and keep moving on.

So this project is to endorse the connections or Sampark(in hindi) that you have with people around you.You can add a bunch of images just to showcase your work,meme , anger or any cool image over at our platform.Everything is backed up by decentralised systems.This is more like a memorial for your future with all the data backed up by blockchain.The storage used here is Skynet(decentralised storage solution) for more information about skynet visit [Skynet](https://siasky.net/)

Check my presentation for better understanding https://docs.google.com/presentation/d/1Bry3jIaKwDlSeyPnC9T6NJkDeIG-f3-mjUDGzZ4kb1M/edit?usp=sharing
## Tech Stack


- Solidity
- Ethermint
- Metamask
- Truffle Suite
- React Js
- Skynet
- Web3js
- React-Bootstrap


## Prerequisites

- Metamask Account
- Linux or mac system

## How to Work
- Begin with cloning ethermint node setup git repository `git clone https://github.com/cosmos/ethermint.git`
- Now let us go inside ethermint directory to start Ethermint node <br>
  `cd ethermint`<br>
  `./init.sh`

- open another terminal with ethermint folder as destination <br>
 `ethermintcli rest-server --laddr "tcp://localhost:8545" --unlock-key mykey --chain-id ethermint-1 --trace`
- also add crypto of this personal node to your account <br>
  `ethermintcli tx faucet request 100aphoton --from mykey`
- open a new tab and clone this repository <br>
   `git clone https://github.com/3scava1i3r/HackAtom-V.git` 
    <br> `cd sampark`
    <br> `npm i`
    <br> `cd src/`
    <br> `npm start`
    <br> this will start the server locally at port 3000
- connect your metamask with your account provided with ethermint node using ethermint [docs](https://docs.ethermint.zone/guides/metamask.html)
- open your browser to interact with the platform  
- connect to custom rpc 8545 or make one if it is not there
- use this command to get your private key(just a dummy account here but you should not tell this to anyone)
  <br>`ethermintcli keys unsafe-export-eth-key mykey`<br>
- use this private key and import it into metamask now you are ready to upload files and also get them on your personal ethermint node

