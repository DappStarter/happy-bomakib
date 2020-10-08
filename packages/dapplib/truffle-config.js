require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stomach dash remain coin harvest bag army gentle'; 
let testAccounts = [
"0xeae7f758ce7fa82b168792f33891618e7381fb0668b916325bfe9d4c1450e024",
"0x3ecfb2e879e8514090e8cfe9fe3ca7bbc49241736f09badfaced38b8286c3986",
"0xf65ea4f055459f9273c1de1d315c54174df4f1b8849886ce6c527445cabad09b",
"0xab6658fbc98297db31fd3d6f11a3a4e150d78f5551eeb7499ac647c410ed5730",
"0xef0534cd249ec2753669e38658e7dd0889a79c65c2cd1580314a0bf3da8b4ad9",
"0x71a65a0498e58673bb23a7fc68dcf3d5ff085e4543ac42acbcf5f05acfb38953",
"0x5895f274f86e99da6692682c34cbb16f211f3cfe58eb08f4de9be68730743bdd",
"0xd69bd0a00eb9c359b257fb8f8771901899c7c0867ed04d49e7f27a10cfa96bc3",
"0x2948ba946d85bca94e0c772452252c35f1c37ca13a5d8069f1cf72b584d6375b",
"0x44a0e49a6a4275e91b64e6abcf22346df2f6c6d5c42c99a1beacee60cc528853"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
