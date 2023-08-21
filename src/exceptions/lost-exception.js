const ApiExceptions = class ApiExceptions{

    constructor(obj) {
        //super(obj.message)
        this.name = obj.name;
        this.message = obj.message || '';
        this.status = obj.status || 500;
        this.stack = obj.stack || (new Error()).stack || '';

    }
}
module.exports = ApiExceptions