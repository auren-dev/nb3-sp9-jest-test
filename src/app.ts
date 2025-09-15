import express from 'express'

const app = express()

app.get('/health', (req, res) => {
    res.status(200).send({ message: 'OK' })
})

app.get('/hello', (req, res) => {
    res.json({ message: 'success' })
})

app.listen(3000, () => console.log('Server Started'))