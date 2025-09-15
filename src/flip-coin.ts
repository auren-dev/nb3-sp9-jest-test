type Coin = 'Head' | 'Tail'

export const flipCoin = (): Coin => {
    const value = Math.random()
    return value > 0.5 ? 'Head' : 'Tail'
}