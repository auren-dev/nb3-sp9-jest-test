import { describe, it, test, expect, jest } from '@jest/globals'
import { fetchData, getAvatars } from '../src/async'

test('[비동기] Callback', (done) => {
    fetchData((data) => {
        expect(data).toBe('ok')
        done()
    })
})

test('[비동기] async/await', async () => {
    const avatars = await getAvatars()
    // console.log(avatars)
    expect(avatars).toBeTruthy()
})