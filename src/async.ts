type CallbackFn = (data: string) => void

export const fetchData = (cb: CallbackFn) => {
    setTimeout(() => cb('ok'), 100)
}

export const getAvatars = async () => {
    const response = await fetch('https://learn.codeit.kr/api/avatars')
    const { results } = await response.json()
    return results
}