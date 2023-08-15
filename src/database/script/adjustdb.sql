#Ajusta o ID da empresa
SET @FK_PARTNER := 'ASDJHSDASDKJL-ASDADADHKJHAS';

#Config do novo id com as referências da empresa

update persona set id = concat(persona.id,"-", @FK_PARTNER);

update compra set id = concat(compra.id,"-", @FK_PARTNER);
update compra set fk_cliente = concat(compra.fk_cliente,"-", @FK_PARTNER);

update compra set id = concat(compra.id,"-", @FK_PARTNER);
update detalhecompra set fKcompra = concat(detalhecompra.fKcompra,"-", @FK_PARTNER);
update detalhecompra set id = concat(detalhecompra.id,"-", @FK_PARTNER);

#Atualizando os dados com o ID da empresa
update persona set persona.partner = @FK_PARTNER;
update compra set compra.partner = @FK_PARTNER;
update detalhecompra set detalhecompra.partner = @FK_PARTNER;