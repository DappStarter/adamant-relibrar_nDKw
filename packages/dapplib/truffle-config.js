require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth sister pulse harvest bean obscure tourist'; 
let testAccounts = [
"0xb3e9775e60c5b8ec077d521b416b8100205ec9641bdfc1aec7f6d73ecc66b2d3",
"0x461c7bdb4f60c618bb454f8ddfe1022081266a3a47c0de431550aa02c0fa5f74",
"0x21717ea26d4e13baa4f6a94dbf73224365fdbababf4d08b59dd71239c88c4120",
"0x20558d63207b63fdf475db849427e4863c1a3c811c6f1dab8712b6621f452298",
"0xf9afd4beb3c0fd3f6fb0bcb0723bccf6eb4d76de197b4ac3e22c067bedf9515e",
"0xfbaa1a2ede6b5c87e186efff035c125c67435f0f32abf02faa023efaa343647b",
"0xb9f8002b6bf3d8d038520c31770dca165af5a13bd5274395c938178288337a6e",
"0xc8806ccf28bd4b90656f60c6d09b5b8281fb14fbd9f68c2384261ba3a44b79a9",
"0x955082f16084d761d9bb7b97e8688cd2a42849dfc0108a6adbcd7af037fb477e",
"0xc07000cc10ef1a2891f1e84f0ee1d0d5f49b770454b7be119a1fccc9bc5db1fc"
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
            version: '^0.8.0'
        }
    }
};

