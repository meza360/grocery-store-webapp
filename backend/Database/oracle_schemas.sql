BEGIN
EXECUTE IMMEDIATE 'CREATE TABLE
"Proveedor" (
    "Id" NUMBER(10) GENERATED BY DEFAULT ON NULL AS IDENTITY NOT NULL,
    "Nombre" NVARCHAR2(2000),
    CONSTRAINT "PK_Proveedor" PRIMARY KEY ("Id")
)';
END;


BEGIN
EXECUTE IMMEDIATE 'CREATE TABLE
"Producto" (
    "Id" NUMBER(10) GENERATED BY DEFAULT ON NULL AS IDENTITY NOT NULL,
    "Nombre" NVARCHAR2(2000),
    "Categoria" NVARCHAR2(2000),
    "Id_ProveedorId" NUMBER(10),
    CONSTRAINT "PK_Producto" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Producto_Proveedor_Id_ProveedorId" FOREIGN KEY ("Id_ProveedorId") REFERENCES "Proveedor" ("Id")
)';
END;


DESCRIBE "Producto";
DESCRIBE "Proveedor";

INSERT INTO "Proveedor" VALUES(1,'Suli');
INSERT INTO "Proveedor" VALUES(2,'Maggi');
INSERT INTO "Proveedor" VALUES(3,'Mahler');
INSERT INTO "Proveedor" VALUES(4,'GreatValue');
INSERT INTO "Proveedor" VALUES(5,'Cañareal');
INSERT INTO "Proveedor" VALUES(6,'Delmonte');

INSERT INTO "Producto" VALUES(1,'Servilletas','Cocina',1);
INSERT INTO "Producto" VALUES(2,'Arroz','cocina',1);
INSERT INTO "Producto" VALUES(3,'Maizena','comida',2);
INSERT INTO "Producto" VALUES(4,'Maseca','comida',3);
INSERT INTO "Producto" VALUES(5,'Aceite','comida',4);
INSERT INTO "Producto" VALUES(6,'Aceite','comida',6);
INSERT INTO "Producto" VALUES(7,'Azucar','comida',4);



/*SCRIPT PARA PRUEBA DE API CON IMAGENES V1*/
CREATE TABLE PRODUCTO(
CODIGO_PRODUCTO INTEGER,
NOMBRE VARCHAR2(50),
PRECIO NUMBER(8,2),
PRIMARY KEY (CODIGO_PRODUCTO)
);

BEGIN
FOR X IN 1..100 LOOP
    INSERT INTO "Producto" VALUES(SYS_GUID(),'PROD_' || X, X*3.5);
END LOOP;
END;


SELECT * FROM "Producto";

CREATE SEQUENCE 
INCREMENT BY 1
START WITH 1
ORDER

/*INSERCION DE DATOS PRUEBA*/
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Aceite de cocina',     18.50,SEQ_SKU.NEXTVAL,'S','Aceite para cocinar, freir, untar, vegetal');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Aceite industrial',    19.50,SEQ_SKU.NEXTVAL,'N','Aceite para uso de herreria');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Agua oxigenada',       20.50,SEQ_SKU.NEXTVAL,'N','Peroxido de hidrogeno');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Alcohol',              18.55,SEQ_SKU.NEXTVAL,'S','Alcohol al 70%');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Cafe premium',         18.73,SEQ_SKU.NEXTVAL,'S','Cafe tostado y molido premium');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Cafe regular',         18.21,SEQ_SKU.NEXTVAL,'N','Cafe tostado y molido');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Carne roja',           18.36,SEQ_SKU.NEXTVAL,'S','Carne de res');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Carton de huevo',      18.48,SEQ_SKU.NEXTVAL,'S','Carton de huevo, 32 unidades');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Frijoles colorados',   18.65,SEQ_SKU.NEXTVAL,'S','Frijoles colorados en grano');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Leche descremada',     18.70,SEQ_SKU.NEXTVAL,'S','Leche descremada');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Leche entera',         18.75,SEQ_SKU.NEXTVAL,'N','Leche entera de vaca');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Leche vegetal',        18.32,SEQ_SKU.NEXTVAL,'S','Leche de origen vegetal');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Manzana verde',        18.15,SEQ_SKU.NEXTVAL,'S','Manzana verde importada');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Muslo de pavo',        18.99,SEQ_SKU.NEXTVAL,'N','Muslos de pavo (libra)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Muslo de pollo',       18.84,SEQ_SKU.NEXTVAL,'S','Muslos de pollo(libra)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Pan blanco',           18.21,SEQ_SKU.NEXTVAL,'N','Pan blanco(paquete)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Pan dulce',            18.25,SEQ_SKU.NEXTVAL,'S','Pan dulce(paquete)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Pan integral',         18.42,SEQ_SKU.NEXTVAL,'S','Pan integral(paquete)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Papel higienico',      18.42,SEQ_SKU.NEXTVAL,'S','Papel higienico doble hoja');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Pera verde',           18.47,SEQ_SKU.NEXTVAL,'S','Pera verde(libra)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Refrigerante',         18.43,SEQ_SKU.NEXTVAL,'S','Refrigerante para carro verde(litro)');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Vino blanco',          18.95,SEQ_SKU.NEXTVAL,'S','Vino blanco');
INSERT INTO "Producto" ("Nombre_Producto","Precio","Sku_Id","Activo","Descripcion") VALUES ('Vino tinto',           18.98,SEQ_SKU.NEXTVAL,'S','Vino tinto');




COMMIT;


DROP TABLE "Proveedor";
DROP TABLE "Producto";


COMMIT;


