class Counter {
    private count = 0

    increment() {
        this.count++
    }
    decrement() {
        this.count--
    }
    set(value: number) {
        this.count = value
    }
    get() {
        return this.count
    }
    reset() {
        this.count = 0
    }
}

export default Counter