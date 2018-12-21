import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import { networks } from 'bitcoinjs-lib';

export function newMaster(): bip32.BIP32 {
	const mnemonic = bip39.generateMnemonic()
	const binarySeed = bip39.mnemonicToSeed(mnemonic)
	return bip32.fromSeed(binarySeed, networks.testnet)
}

// delete private information
export function toExtPub(extKey: bip32.BIP32): bip32.BIP32 {
	return extKey.neutered()
}

const master = newMaster();
console.log(toExtPub(master).toBase58());
