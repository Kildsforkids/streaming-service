const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const { default: axios } = require('axios')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

        // axios.post('http://192.168.1.188:20000/osc/commands/execute', {
        //     name: 'camera._connect',
        //     parameters: {
        //         hw_time: '04051020[[20]21][.30]',
        //         time_zone: 'Asia/Vladivostok'
        //     }
        // })
        // .then(res => {
        //     console.log(`statusCode: ${res.status}`)
        //     console.log(res)

        //     // if (res.status === 200) {
        //     //     axios.post('http://192.168.1.188:20000/osc/state', {})
        //     //     .then(newRes => {
        //     //         console.log(`statusCode: ${newRes.status}`)
        //     //         console.log(newRes)
        //     //     })
        //     //     .catch(error => {
        //     //         console.error(error)
        //     //     })
        //     // }
        // })
        // .catch(error => {
        //     console.error(error)
        // })

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
