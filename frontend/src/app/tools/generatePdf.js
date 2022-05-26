import jsPDFInvoiceTemplate, { OutputType } from 'jspdf-invoice-template';

let productos = [];
let total = 0;

var props = {
	outputType: OutputType.DataUrlNewWindow,
	returnJsPDFDocObject: true,
	fileName: 'Invoice 2021',
	orientationLandscape: false,
	compress: true,
	logo: {
		src: 'https://umg.edu.gt/assets/umg.png',
		width: 30, //aspect ratio = width/height
		height: 30,
		margin: {
			top: 0, //negative or positive num, from the current position
			left: 0 //negative or positive num, from the current position
		}
	},
	business: {
		name: 'Abarroteria Mariano Galvez de Guatemala',
		address: 'Chinautla,Zona 6,Guatemala',
		phone: '(+502)1111-1111',
		email: 'abarrotesumg@gmail.com',
		website: 'www2.umg.umg'
	},
	contact: {
		label: 'Datos del cliente:',
		name: 'Nombre: ',
		address: 'Direccion: ',
		phone: 'Telefono: ',
		email: 'Correo: client@website.al'
	},
	invoice: {
		label: 'Factura #: ',
		num: 19,
		invDate: 'Fecha de pago:' + new Date().getFullYear() + new Date().getTime(),
		invGenDate: 'Fecha de emision:' + new Date().getFullYear() + new Date().getTime(),
		headerBorder: false,
		tableBodyBorder: false,
		header: [
			{
				title: '#',
				style: {
					width: 10
				}
			},
			{
				title: 'Producto',
				style: {
					width: 30
				}
			},
			{
				title: 'Descripcion',
				style: {
					width: 80
				}
			},
			{ title: 'Precio' },
			{ title: 'Cantidad' },
			{ title: 'Unidad' },
			{ title: 'Total' }
		],
		table: Array.from(productos, (item, index) => [
			index + 1,
			'There are many variations ',
			'Lorem Ipsum is simply dummy text dummy text ',
			200.5,
			4.5,
			'm2',
			400.5
		]),
		invTotalLabel: 'Total factura:',
		invTotal: 'Q.' + total,
		invCurrency: 'Todo',
		row1: {
			col1: 'IVA:',
			col2: '12',
			col3: '%',
			style: {
				fontSize: 10 //optional, default 12
			}
		},
		row2: {
			col1: 'SubTotal:',
			col2: total,
			col3: 'Todo',
			style: {
				fontSize: 10 //optional, default 12
			}
		},
		invDescLabel: 'Nota:',
		invDesc: 'Esta factura constituye un comprobante de pago, no se aceptan cambios ni devoluciones'
	},
	footer: {
		text: 'The invoice is created on a computer and is valid without the signature and stamp.'
	},
	pageEnable: true,
	pageLabel: 'Page '
};

export function generatePdf(prod, tot) {
	productos = prod;
	total = tot;
	console.log('productos' + prod);
	console.log('total' + total);
	const pdfObject = jsPDFInvoiceTemplate(props);
}
