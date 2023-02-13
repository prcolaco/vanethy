#!/usr/bin/env node

const { version, description } = require('../package.json');

const { Command } = require('commander');
const { ethers } = require('ethers');

const program = new Command(); 

program
    .name('vanethy')
    .description(description)
    .version(version)
    .argument('<prefix...>', 'vanity prefixes to search for, like 123 or 0x123')
    .option('-i, --ignore-case', 'ignore case');

program.parse();

//const vanethyAddresses = ['0x111','0x222','0x333','0x444','0x555','0x666','0x777','0x888','0x999']; // a-f 0-9
const vanethyAddresses = program.args.map(v => v.startsWith('0x') ? v : ('0x'+v));
const ignoreCase = program.opts().ignoreCase;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const tasks = vanethyAddresses.map(async vanethyAddress => {
    const prefix = ignoreCase ? vanethyAddress.toLowerCase() : vanethyAddress;
    console.log(`Searching for "${prefix}" addresses...`);
    while (true) {
        const wallet = ethers.Wallet.createRandom();
        if ((ignoreCase ? wallet.address.toLowerCase() : wallet.address).startsWith(prefix)) {
            console.log(`# ${prefix} found:`);
            console.log(wallet.address);
            console.log(wallet.mnemonic.phrase);
            console.log(wallet.signingKey.privateKey);
            console.log('-------------------------------');
            return wallet;
        }
        await delay(0);
    }
});

Promise.all(tasks).then(wallets => {
    console.log(`done searching for ${wallets.length} vanethy addresses.`);
    process.exit(0);
});
