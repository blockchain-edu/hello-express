import { payments, networks } from 'bitcoinjs-lib';
import * as bip32 from 'bip32';

// example extPubkey base58 string
// begin hard coded
const extPubkeys = [
	'tpubD6NzVbkrYhZ4X941EEVpuvQiuJoJGtLPh4b8dZw1UjLQfCkGZBJfNwic6CSPFDGBbuDYxkKdP1Fm6xw8wvanBe4isqqjTAh57fKCCixjn5b',
	'tpubD6NzVbkrYhZ4Xmef8xnLsvc9AmRUyp6FCgu7q79nABij7g28BWK6FSKZG6gcYqv6uGuTrot7UVsvcsZmz5rNSi77HsCZiFgNDyQRwYqajfo'
];

// generate derived child extended key
function generateChildPubkey(extKeyStr: string, index: number): Buffer {
	const extkey = bip32.fromBase58(extKeyStr)
	return extkey.derive(index).publicKey
}

export function generateMultisigAddress(m: number, pubkeys: Buffer[]): string {
	return payments.p2wsh({
		network: networks.testnet,
		redeem: payments.p2ms({
			network: networks.testnet,
			m,
			pubkeys,
		}),
	}).address;
}
