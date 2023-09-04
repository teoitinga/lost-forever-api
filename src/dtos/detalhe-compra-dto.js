module.exports = class DetalheCompraDto {

    constructor(obj) {

            this.id = obj.id,
            this.dsc = obj.dsc,
            this.qtd = obj.qtd,
            this.vltotal = obj.vltotal,
            this.vlunit = obj.vlunit,
            this.desconto = obj.desconto,
            this.codCompra = obj.fKcompra,
            this.empresa = obj.fkpartner,
            
            this.createdby = obj.createdby,
            this.updatedby = obj.updatedby,
            this.created = obj.created,
            this.updated = obj.updated
            
    }
}