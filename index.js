import express from 'express'

const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
    res.send(`Welcom to my API`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))