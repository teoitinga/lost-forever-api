const {
    StatusCodes,
} = require('http-status-codes');

const ApiException = class ApiException extends Error{

    constructor(message, name, status) {
        
        super(message || 'Server Internal Error')
        this.name = name;
        this.message = message || '';
        this.status = status || 500;

    }
}


const BadRequesException =  class BadRequesException extends ApiException{
    constructor(message) {
        
        super(message)
        this.name = 'Requisição não executada';
        this.message = message || '';
        this.status = StatusCodes.BAD_REQUEST

    }
}

const NotFoundException =  class NotFoundException extends ApiException{
    constructor(message) {
        
        super(message)
        this.name = 'Requisição não encontrada';
        this.message = message || '';
        this.status = StatusCodes.NOT_FOUND

    }
}
const ForBiddenException =  class ForBiddenException extends ApiException{
    constructor(message) {
        
        super(message)
        this.name = 'Requisição não permitida';
        this.message = message || '';
        this.status = StatusCodes.FORBIDDEN

    }

}

const UnauthorizedException =  class UnauthorizedException extends ApiException{
    constructor(message) {
        
        super(message)
        this.name = 'Requisição não autorizada';
        this.message = message || '';
        this.status = StatusCodes.UNAUTHORIZED

    }

}

const GoneException =  class GoneException extends ApiException{
    constructor(message) {
        
        super(message)
        this.name = 'Requisição não solicitada';
        this.message = message || '';
        this.status = StatusCodes.GONE

    }
}

module.exports = {
    BadRequesException,
    UnauthorizedException,
    ForBiddenException,
    NotFoundException,
    GoneException
}