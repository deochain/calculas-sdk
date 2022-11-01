import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly address?: string
  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ANA', 'ANA', '0x9C88330C8aB3Cf53EeF61F4b2E7b2eC8c1e7E164')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string, address?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.address = address
  }
}

const ETHER = Currency.ETHER
export { ETHER }
