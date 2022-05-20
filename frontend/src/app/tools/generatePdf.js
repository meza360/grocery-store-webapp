import jsPDFInvoiceTemplate, { OutputType } from 'jspdf-invoice-template';

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
		invDate: 'Fecha de pago: 01/01/2021 18:12',
		invGenDate: 'Fecha de emision: 02/02/2021 10:17',
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
		table: Array.from(Array(10), (item, index) => [
			index + 1,
			'There are many variations ',
			'Lorem Ipsum is simply dummy text dummy text ',
			200.5,
			4.5,
			'm2',
			400.5
		]),
		invTotalLabel: 'Total factura:',
		invTotal: '145,250.50',
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
			col2: '116,199.90',
			col3: 'Todo',
			style: {
				fontSize: 10 //optional, default 12
			}
		},
		invDescLabel: 'Nota:',
		invDesc:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
	},
	footer: {
		text: 'The invoice is created on a computer and is valid without the signature and stamp.'
	},
	pageEnable: true,
	pageLabel: 'Page '
};

export function generatePdf() {
	const pdfObject = jsPDFInvoiceTemplate(props);
}
