const Web3 = require("web3")

// Connect to an Ethereum node
const web3 = new Web3("https://mainnet.infura.io/v3/25aecec643294498aef72287dc74ee85")

const abi = [
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
const contractAdress = "0x99F4D18897D5234FBe81005BA8f69d669d942524"
const contract = new Web3.eth.Contract(abi, contractAdress)
