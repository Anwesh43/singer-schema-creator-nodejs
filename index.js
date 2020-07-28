class SchemaKey {

    key
    type
    options = {}
    constructor(key) {
    	this.key = key
    }

    setType(type) {
    	this.type = type
    	return this
    }

    addOption(key, value) {
       this.options[key] = value
       return this
     }

    build() {
	const type = this.type
    	return {[this.key] : {...this.options, type}}
    }

    static create(key) {
    	return new SchemaKey(key)
    }
}

class Schema {

    properties = {}

    addProperty(key, type, options) {
        const schemaKey = SchemaKey.create(key).setType(type)
        if (options) {
            Object.keys(options).forEach((option) => {
                schemaKey.addOption(option, options[option])
            })
        }
        const property = schemaKey.build()
        this.properties = {...this.properties, ...property}
        return this
    }

    build() {
        return {"properties" : this.properties}
    }

    static create() {
        return new Schema()
    }
}

module.exports = {SchemaKey, Schema}
