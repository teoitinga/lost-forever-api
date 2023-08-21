module.exports = class PartnerDto {

    constructor(obj) {

            this.id = obj.id;
            this.Ddsc = obj.DSC;
            this.desenvolvedor = obj.DESENV;
            this.contato_desenvolvedor = obj.CONTATODESV;
            this.versao = obj.VERSAO;
            this.cod_intalacao = obj.CODINSTALL;
            this.key_update = obj.UPDATEKEY;
            this.estabelecimento_nome = obj.ESTABELECIMENTO;
            this.estabelecimento_endereco = obj.ENDERECOEST;
            this.estabelecimento_fone = obj.FONEEST;
            this.estabelecimento_responsavel = obj.RESPONSAVELEST;
            this.mensagem_principal = obj.MSG1EST;
            this.mensagem_secundaria = obj.MSG2EST;
            this.estabelecimento_cidade = obj.CIDADEEST;
            this.atualizacao_data = obj.ULTUPDATE;
            this.tempo_de_permissao = obj.TEMPOEXPIRA;
            this.valor_intalacao = obj.VALORINSTALL;
            this.valor_assinatura_mensal = obj.VALORMENSAL;

    }
}