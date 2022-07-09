# Se le solicita realizar un sistema web para ventas on-line de productos de abarrotería para una marca de supermercados reconocida.
# Seguridad
+ Tipos de usuarios:
    + Administrador: Tiene acceso a todas las opciones del sistema.
    + Usuario comprador: Realiza compras de los productos ofrecidos por medio de pedidos. Solo puede crear su propio usuario.
    + Usuario bodeguero: Recibe los productos de los proveedores en la bodega por medio de órdenes de compra.
# Usuarios
+ Todo usuario debe de tener como mínimo la siguiente información: usuario (recomendado que sea su correo electrónico), clave, Nombres, Apellidos y Tipo de usuario.
+ Se debe de validar el uso de claves seguras:
    + Debe incluir números.
    + Utilice una combinación de letras mayúsculas y minúsculas.
    + Incluya caracteres especiales (- * ? ! @ # $ / () {} = . , ; :).
    + Tenga una longitud mayor o igual a 8 caracteres.
    + No debe tener espacios en blanco.
# Auditoria de Productos
+ Se debe de llevar el control de cualquier cambio en los datos de todos los productos del inventario, principalmente la cantidad en existencia, cantidad de reserva, cantidad mínima y máxima, activo, precio compra, precio venta y margen de ganancia.
+ El sistema brinda reportes en donde debe de indicar la fecha/hora del cambio, campo modificado, valor anterior, valor nuevo, usuario modificador, documento/proceso relacionado (pedido, orden de compra, proceso max-min) o cambio manual.
# Productos (inventario)
+ Datos de los productos: código único, nombre, descripción, tipo de producto, unidad de medida, precio venta, precio compra, porcentaje ganancia, cantidad en existencia, cantidad en reserva, cantidad mínima, cantidad máxima, activo (S/N), imagen del producto y proveedores que distribuyen el producto.
+ Cuando se crea un nuevo producto la cantidad en reserva y mínima debe de ser cero y la máxima 100 unidades
+ Todos los precios se guardan con IVA.
+ El tipo de producto es una clasificación que permite la agrupación de los productos.
+ La existencia de un producto nunca puede ser negativa
+ El porcentaje de ganancia se utiliza para calcular el precio de venta a partir del último precio de compra (precio venta = precio compra * porcentaje ganancia). Esto solo puede ser modificado por un usuario administrador. Por tanto, el precio de venta de se actualiza cada ver que cambia el precio de compra.
+ La cantidad en reserva es la cantidad de unidades del producto solicitado en los pedidos “en progreso”.
+ La cantidad mínima, es la cantidad total (mayor a cero) del día en que menos ventas (pedidos finalizados) se realizaron del producto en los últimos 30 días. Si este dato llegara a ser igual a la cantidad máxima, entonces su valor es cero.
+ La cantidad máxima, es la cantidad total (mayor a cero) del día en que más ventas (pedidos finalizados) se realizaron del producto en los últimos 30 días.
+ El campo activo, indica si el producto está activo en el sistema (S) o inactivo (N). Este cambio únicamente lo puede hacer un usuario administrador
+ Proceso Máximo – Mínimos: Esta funcionalidad del sistema permite al administrador hacer el cálculo y actualización de las cantidades mínimas y máximas de un producto específico o de todos los productos.
+ Proceso de Inactivación Automática: Esta funcionalidad del sistema permite inactivar todos los productos que actualmente no tienen existencia y no han tenido movimiento (compra o venta) en los últimos 30 días.
+ Cuando la cantidad en existencia de un producto llega a ser menor a su cantidad mínima, automáticamente se debe de generar una nueva orden de compra al último proveedor que se le compro dicho producto con una cantidad que permita igualar la cantidad máxima definida en el inventario. Esta nueva orden de compra inicia con un estatus de “automática".

# Clientes
+ Cualquier persona que cuente con una dirección de correo electrónico y tarjeta de crédito puede ser cliente del sistema.
+ Datos de los clientes: nombres y apellidos completos, número de NIT, país de origen, teléfono y dirección de entrega. Dirección de correo electrónico y número de tarjeta de crédito.
## Cliente Nuevo
+ Debe de ingresar una dirección de correo electrónico, el sistema valida que no exista y luego solicita la contraseña que utilizará, así como todos los datos generales necesarios.
## Cliente existente
+ Ingresa sus credenciales (email y contraseña) para ingresar al sistema y operar sus pedidos.

# Pedidos (proceso de venta)
+ El sistema le permite al usuario (ya autenticado) visualizar solo los productos “activos” con existencia en bodega, indicando su precio de venta. Mostrando en primer lugar los productos que compro en su última visita.
+ El usuario selecciona cada producto que desea ingresando la cantidad a comprar, acumulándose todo en la “carretilla”, esto automáticamente creará un nuevo pedido en estatus “en progreso”. Se debe de llevar el control del monto total del pedido y los productos del mismo (cantidad y precio venta). La cantidad de un producto del pedido “en progreso” debe de aumentar la “cantidad en reserva” del producto en el inventario.
+ El usuario en cualquier momento puede agregar o eliminar productos de la carretilla. Cuando desea confirmar el pedido, el sistema debe de pedir la confirmación de la tarjeta de crédito registrada y del monto total del pedido a pagar, pasando el pedido a status “finalizado”. En este momento el sistema debe de rebajar el inventario y liberar las reservas. Si existiese algún producto del cual ya no se cuente con la cantidad solicitada, entonces se debe de informar al usuario para que ajuste la cantidad o bien eliminar totalmente el producto del pedido. Solo se pueden finalizar pedidos completos, es decir, no se permite despachar de forma parcial los productos del pedido.
+ Cuando un pedido es “finalizado”, el sistema debe generar la factura respectiva (con la fecha del día) con los datos ya almacenados del cliente y con el detalle de todos los productos facturados (cantidad y precio de venta).
+ Si un pedido “en progreso” (en la carretilla), no se ha finalizado y ya no se desea seguir trabajando con él, se puede pasara a estatus “cancelado”. Liberando las reservas de los productos. El pedido cancelado ya no puede cambiar nunca de estatus, es decir, ya no se puede utilizar para nada.
+ Si el cliente solicita una anulación de factura, el pedido asociado a la factura pasa a estatus “devuelto” y la factura queda “anulada”. Todas las cantidades de los productos del pedido suman nuevamente al inventario.
+ Un cliente para poder hacer un nuevo pedido, debe de tener obligatoriamente registrada su tarjeta de crédito y no debe de tener pedidos “en proceso”.
+ El sistema debe de brindar al usuario reportes que le permitan saber el histórico de sus pedidos y productos comprados, permitiendo realizar búsquedas (como mínimo) por rango de fechas, numero de pedido, numero de factura, código de producto, nombre del producto, tipo de producto o rango de precios.

# Proveedores
+ Datos de los proveedores: nombre comercial, nombres y apellidos completos del representante legal, número de NIT, país de origen, teléfono y dirección, dirección de correo electrónico.
+ Un proveedor puede abastecernos de varios productos y un producto también puede ser distribuido por muchos proveedores, por lo que es importante tener el control del histórico de precios de cada producto y proveedor.

# Bodega (compras)
+ Para realizar una compra de productos a un proveedor, se debe de hacer por medio de una “orden de compra”, agregando los productos requeridos, iniciando en un estatus de “ingresada” la orden de compra. El precio de cada producto en la orden de compra se toma en base a la última compra realizada al proveedor de ese producto, si nunca se ha comprado el producto al proveedor se coloca precio de Q 1.00.
+ No se debe de permitir realizar órdenes de compra de productos cuya cantidad solicitada más la existencia actual, supere su cantidad máxima definida.
+ Al momento de que el proveedor confirma los precios y la cantidad de producto que puede proporcionar (si no tiene existencia de algún producto, se debe de registrar con valor 0 la cantidad del producto en la orden), la orden de compra pasa a estatus “completada”, entonces se aumenta el inventario de cada producto incluido en la orden de compra y se actualiza el precio de compra del producto. No se recibe producto de forma parcial, hasta que esté todo el producto en bodega la orden de compra puede ser “completada”.
+ Si una orden de compra está “ingresada” y ya no se desea utilizar entonces puede cambiar a estatus “cancelada”.
+ Si una orden de compra “completada” desea cancelarse, únicamente se puede realizar si existe en inventario la cantidad necesaria de todos los productos incluidos en la orden de compra, es decir, que al rebajar el inventario ningún dato quede con valor negativo. Si esto es posible, entonces la orden de compra queda “reversada” y la cantidad del producto es rebajada del inventario.
+ Si la cantidad incluida de un producto en una orden de compra al momento de “completarse” supera la cantidad máxima definida para el producto en el inventario, solo se debe de aceptar la cantidad que iguale la cantidad máxima permitida.
+ Cuando se complete una orden de compra, se debe de aumentar la existencia en el inventario y actualizar el precio de compra de cada producto, lo que automáticamente también debe de actualizar su precio de venta respectivo, tomando en cuenta su margen de ganancia también ya definido en el inventario.
+ El sistema debe de brindar al usuario reportes que le permitan saber el histórico de las ordenes de compras y productos comprados, permitiendo realizar búsquedas (como mínimo) por proveedor, por rango de fechas, código de producto, nombre del producto, tipo de producto o rango de precios.
+ Proceso – órdenes de compra automáticas: Dicho proceso generará órdenes de compra con estatus “automática” de todos aquellos productos cuya existencia sea menor que su cantidad en reserva. La cantidad a comprar debe de ser la que garantice satisfacer la cantidad en reserva y que la existencia del producto quede igual a la cantidad máxima del producto. El proveedor al que se le debe de generar la solicitud es el último al que se le compro el producto. Solo se debe de generar una orden de compra automática a cada proveedor, es decir, debe de agrupar todos los productos que puede abastecer a la bodega.
# Requerimientos Técnicos
Se deberá de configurar una red local con estas funciones.
+ 1 servidor de base de datos (transaccional)
+ 1 servidor de base de datos (replica o espejo del transaccional)
+ 1 servidor web con la aplicación
+ 1 cliente (como mínimo)
+ Sistemas operativos de los servidores y cliente: libre
+ Software de Bases de Datos: Oracle Enterprise Database 12c o superior
+ Web Server: libre
+ Lenguaje de programación: libre
+ IDE para desarrollo: Libre