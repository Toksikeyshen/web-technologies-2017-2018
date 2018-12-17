import express from 'express'
import routes from './routes'

const app = express()
app.use(routes)

const port = process.env.PORT || 3000

const server = app.listen(port, console.log(`Server started...${port}`))

process.on('SIGINT', () => {
    console.log('Server closing...')
    server.close(() => {
        console.log('Server closed.')
    })
})