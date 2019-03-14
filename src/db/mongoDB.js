import { connect } from 'mongodb'

const env = require('dotenv')

const uri = `mongodb+srv://${env.USERNAME}:${
  env.PW
}@cluster0-ydedl.mongodb.net/test?retryWrites=true`

// connect to db
connect(
  uri,
  function(_err, db) {
    console.log('Connected to DB')

    // Insert Documents To DB
    db.collection('inventory').insertMany([
      // MongoDB adds the _id field with an ObjectId if _id is not present
      {
        item: 'journal',
        qty: 25,
        status: 'A',
        size: { h: 14, w: 21, uom: 'cm' },
        tags: ['blank', 'red'],
      },
      {
        item: 'notebook',
        qty: 50,
        status: 'A',
        size: { h: 8.5, w: 11, uom: 'in' },
        tags: ['red', 'blank'],
      },
      {
        item: 'paper',
        qty: 100,
        status: 'D',
        size: { h: 8.5, w: 11, uom: 'in' },
        tags: ['red', 'blank', 'plain'],
      },
      {
        item: 'planner',
        qty: 75,
        status: 'D',
        size: { h: 22.85, w: 30, uom: 'cm' },
        tags: ['blank', 'red'],
      },
      {
        item: 'postcard',
        qty: 45,
        status: 'A',
        size: { h: 10, w: 15.25, uom: 'cm' },
        tags: ['blue'],
      },
    ])
    // .then(function(result) {
    //   // process result
    // })

    db.close()
  }
)
