// Ensure ethereum is enabled
window.ethereum.enable()

// Define Ropsten as ethers provder
const provider = new ethers.providers.Web3Provider(
    web3.currentProvider,
    "ropsten"
)

// Import contract address & ABI
const MoodContractAddress = "0x7DfD10510f522Eab81E85Eea594Ffb25eC360424"
const MoodContractABI = [
{
    "inputs": [],
    "name": "getMood",
    "outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "string",
        "name": "_mood",
        "type": "string"
    }
    ],
    "name": "setMood",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
]
let MoodContract
let signer

// Connect signe to Metamask & define contract objects (address, ABI,
// signer)
provider.listAccounts().then(function (accounts) {
signer = provider.getSigner(accounts[0]);
MoodContract = new ethers.Contract(
    MoodContractAddress,
    MoodContractABI,
    signer
);
});

// Call contract functions
async function getMood() {
getMoodPromise = MoodContract.getMood();
var Mood = await getMoodPromise;
console.log(Mood);
}

async function setMood() {
let mood = document.getElementById("mood").value;
setMoodPromise = MoodContract.setMood(mood);
await setMoodPromise;
}