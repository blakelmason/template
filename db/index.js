const mongoose = require('mongoose')
const models = require('./models')

const connect = () =>
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('\nconnected to db'))
    .catch((err) => console.error(err))

const reset = () =>
  Promise.all(Object.keys(models).map((key) => models[key].deleteMany({})))
    .then(() => console.log('\nreset all models'))
    .catch((err) => console.error(err))

const seed = () =>
  models.Test.create({
    test: 'yayayayayayayay',
  })
    .then(() => console.log('\ndb seeded'))
    .catch((err) => console.error(err))

module.exports = { connect, reset, seed }
