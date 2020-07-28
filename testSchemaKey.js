const {SchemaKey} = require('./index')

const obj = SchemaKey.create('age').setType('integer').addOption('maximum', 130).addOption('minimum', 18).build()

console.log(obj)
