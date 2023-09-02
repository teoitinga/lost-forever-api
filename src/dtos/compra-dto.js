module.exports = class CompraDto {

    constructor(obj) {

            this.id = obj.id,
            this.dsc = obj.dsc,
            this.desconto = obj.desconto,
            this.acertado_em = obj.acertado_em,
            this.data_compra = obj.data_compra,
            this.debAtual = obj.debAtual,
            this.entregue_a = obj.entregue_a,
            this.valor_compra = obj.valor_compra,
            
            this.cliente = obj.fk_cliente,
            this.funcionario = obj.entregue_por,
            this.empresa = obj.fkpartner,

            this.createdby = obj.createdby,
            this.updatedby = obj.updatedby,
            this.created = obj.created,
            this.updated = obj.updated
            
    }
}