#Ajusta o ID da empresa
SET @FK_PARTNER := 'ASDJHSDASDKJL-ASDADADHKJHAS';


#Config do novo id com as referências da empresa

#Tabela persona
INSERT INTO `persona` (id, apelido, categoria, data_cadastro, debito, endereco, fone, nome, prazo, rg, senha, state, ultAtualizacao, usuario)
VALUES...

update persona set id = concat(persona.id,"-", @FK_PARTNER) where persona.partner IS NULL;
update persona set partner = persona.partner = @FK_PARTNER where persona.partner IS NULL;


#Tabela compra
INSERT INTO `compra`(id, acertado_em, data_compra, debAtual, entregue_a, valor_compra, fk_cliente, entregue_por)
values...

update compra set id = concat(compra.id,"-", @FK_PARTNER) where compra.partner IS NULL;
update compra set fk_cliente = concat(compra.fk_cliente,"-", @FK_PARTNER) where compra.partner IS NULL;
update compra set entregue_por = concat(compra.entregue_por,"-", @FK_PARTNER) where compra.partner IS NULL;
update compra set partner = compra.partner = @FK_PARTNER where compra.partner IS NULL;


#Tabela detalhecompra
INSERT INTO `detalhecompra`(id, desconto, dsc, qtd, vltotal,vlunit, fKcompra )
VALUES...

update detalhecompra set id = concat(detalhecompra.id,"-", @FK_PARTNER) where detalhecompra.partner IS NULL;
update detalhecompra set fKcompra = concat(detalhecompra.fKcompra,"-", @FK_PARTNER) where detalhecompra.partner IS NULL;
update detalhecompra set partner = detalhecompra.partner = @FK_PARTNER where detalhecompra.partner IS NULL;

