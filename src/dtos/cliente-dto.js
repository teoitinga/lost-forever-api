module.exports = class UsuarioDto {

    constructor(obj) {

            //this.obj = obj || {}, 
            this.id = obj.id,
            this.nome = obj.nome,
            this.apelido = obj.apelido,
            //this.categoria = obj.categoria,
            //this.data_cadastro = obj.data_cadastro,
            this.debitoAtual = obj.debito,
            this.endereco = obj.endereco,
            this.fone = obj.fone,
            this.prazo = obj.prazo,
            this.rg = obj.rg,
            //this.senha = obj.senha,
            //this.state = obj.state,
            //this.usuario = obj.usuario,
            //this.ultAtualizacao = obj.ultAtualizacao,
            this.createdby = obj.createdby,
            this.updatedby = obj.updatedby,
            this.created = obj.created,
            this.updated = obj.updated
            
    }
}