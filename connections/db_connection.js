const mongoose = require('mongoose')
mongoose.connect(process.env.BASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Mongo db is connected');
}).catch(() => {
    console.log('Mongo db is not connected');
})