// blockchain-utils.js

// Function to calculate the hash of a block
function calculateHash(block) {
    return /* hash calculation logic */;
}

// Function to create a new block
function createBlock(previousBlockHash, data) {
    const timestamp = Date.now();
    const block = {
        timestamp,
        previousBlockHash,
        data,
        hash: calculateHash({ previousBlockHash, timestamp, data }),
    };
    return block;
}

// Function to validate the integrity of a chain
function validateChain(chain) {
    for (let i = 1; i < chain.length; i++) {
        const currentBlock = chain[i];
        const previousBlock = chain[i - 1];

        // Check if the hash of the current block is correct
        if (currentBlock.hash !== calculateHash(currentBlock)) {
            return false;
        }

        // Check if the previousBlockHash property is correct
        if (currentBlock.previousBlockHash !== calculateHash(previousBlock)) {
            return false;
        }
    }
    return true;
}

// Exporting functions to be used as an npm package
module.exports = {
    calculateHash,
    createBlock,
    validateChain
};
