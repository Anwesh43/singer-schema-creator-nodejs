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


module.exports = {SchemaKey}
