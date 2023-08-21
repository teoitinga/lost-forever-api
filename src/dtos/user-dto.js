module.exports = class UsuarioDto {

    constructor(obj) {

            this.id = obj.id,
            this.login = obj.login,
            this.nome = obj.nome,
            this.apelido = obj.apelido,
            this.categoria = obj.categoria,
            this.password = obj.senha,
            this.endereco = obj.endereco,
            this.fone = obj.fone
            this.partner = obj.partner

    }
}