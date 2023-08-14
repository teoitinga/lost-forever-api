SET @FK_PARTNER := 'ASDJHSDASDKJL-ASDADADHKJHAS';

update persona set id = concat(persona.id,"-", @FK_PARTNER);

update compra set id = concat(compra.id,"-", @FK_PARTNER);
update compra set fk_cliente = concat(compra.fk_cliente,"-", @FK_PARTNER);

update compra set id = concat(compra.id,"-", @FK_PARTNER);
update detalhecompra set fKcompra = concat(detalhecompra.fKcompra,"-", @FK_PARTNER);