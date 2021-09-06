import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.ROPSTEN]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
  [ChainId.RINKEBY]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
  [ChainId.GÖRLI]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
  [ChainId.KOVAN]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0xC4AE81853F39fe1E6474B8848E5f22443A83A988',
}

export const INIT_CODE_HASH: string = "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.RINKEBY]: '0x027Bb5f9205360aC628C33508c3f182320A44525',
  [ChainId.ROPSTEN]: '0x027Bb5f9205360aC628C33508c3f182320A44525',
  [ChainId.GÖRLI]: '0x027Bb5f9205360aC628C33508c3f182320A44525',
  [ChainId.KOVAN]: '0x027Bb5f9205360aC628C33508c3f182320A44525',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0xf7e669D0f1Caf1fBb53Db5A41cB07AdF5d66697d',
}

export const SUSHI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.ROPSTEN]: '0x63058b298f1d083beDcC2Dd77Aa4667909aC357B',
  [ChainId.RINKEBY]: '0x63058b298f1d083beDcC2Dd77Aa4667909aC357B',
  [ChainId.GÖRLI]: '0x63058b298f1d083beDcC2Dd77Aa4667909aC357B',
  [ChainId.KOVAN]: '0x63058b298f1d083beDcC2Dd77Aa4667909aC357B',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x921f083A931E74ba2A8ba55a4881a3c58f4f271d',
  [ChainId.RINKEBY]: '0x921f083A931E74ba2A8ba55a4881a3c58f4f271d',
  [ChainId.GÖRLI]: '0x921f083A931E74ba2A8ba55a4881a3c58f4f271d',
  [ChainId.KOVAN]: '0x921f083A931E74ba2A8ba55a4881a3c58f4f271d',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x86E403D507815138F749DFd5C9680a5178b3fEbC',
  [ChainId.RINKEBY]: '0x86E403D507815138F749DFd5C9680a5178b3fEbC',
  [ChainId.GÖRLI]: '0x86E403D507815138F749DFd5C9680a5178b3fEbC',
  [ChainId.KOVAN]: '0x86E403D507815138F749DFd5C9680a5178b3fEbC',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x2dC7d393151D5205610501F2DA11ee52f07c731B',
  [ChainId.RINKEBY]: '0x2dC7d393151D5205610501F2DA11ee52f07c731B',
  [ChainId.GÖRLI]: '0x2dC7d393151D5205610501F2DA11ee52f07c731B',
  [ChainId.KOVAN]: '0x2dC7d393151D5205610501F2DA11ee52f07c731B',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
