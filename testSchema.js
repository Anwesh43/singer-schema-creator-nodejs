const {Schema} = require('./index')
const properties = Schema
  .create()
  .addProperty('age', 'integer', {'maximum': 130, 'minimum': 18})
  .addProperty('name', 'string')
  .addProperty('jobTitle', 'string')
  .build()

console.log("properties", properties)
