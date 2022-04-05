const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient;
const config = require('./config');

let maticPosClient;

let parentProvider;
let maticProvider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running
  parentProvider = window.ethereum;
  maticProvider = window.ethereum;
}

maticPosClient = new MaticPOSClient({
  network: 'testnet', // optional, default is testnet
  version: 'mumbai', // optional, default is mumbai
  parentProvider: parentProvider,
  maticProvider: maticProvider,
  posRootChainManager: config.root.goerli.POSRootChainManager,
  posERC20Predicate: config.root.goerli.posERC20Predicate,
});

export default maticPosClient;
