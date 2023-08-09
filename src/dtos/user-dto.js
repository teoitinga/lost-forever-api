module.exports = class UsuarioDto {

    constructor(obj) {

            this.id = obj.id,
            this.nome = obj.nome,
            this.apelido = obj.apelido,
            this.categoria = obj.categoria,
            this.endereco = obj.endereco,
            this.fone = obj.fone

    }
}