import DataGrid from "../../../Components/DataGrid/DataGrid.tsx";
import {Preview} from "../../../Components";
import {useState} from "react";

const DataGrid2 = () => {
	const [value1, setValue1] = useState<Array<SheetExampleType2>>([
		{
			'designation': 'OKKK',
			quantity: 10,
			'adress': 'AKDITAL',
			'etatReceipt': 'en cours'
		},
	])
	return (

		<DataGrid size='sm'
							borderStyle='solid'
							columns={[
								{field: 'designation', headerName: 'Designation', editable: true},
								{field: 'quantity', headerName: 'Qte acheté', editable: true},
								{field: 'adress', headerName: 'Adresse de livraison', editable: true},
								{field: 'etatReceipt', headerName: 'Etat de Reception', editable: true},
							]}
							value={value1}
							onChange={setValue1}/>
	);
};
type SheetExampleType = {
	id: number
	designation: string
	groupement1: string
	groupement2: string
	quantity: number
	discountType: string
	discountValue: number
	grossPrice: number
	netPrice: number
	note: string
	grossTotalExclTax: number
	netTotalExclTax: number
	/*buyer: {
		id:string
		name:string
	};*/
	mntCompte: number
	mntTransaction: number
}
type SheetExampleType2 = {
	designation: string
	quantity: number
	adress: string
	etatReceipt: string
}
const Page = () => {
	const [value, setValue] = useState<Array<SheetExampleType>>([
		{
			id: 1,
			'designation': 'OKKK',
			'groupement1': 'OK',
			'groupement2': 'OK',
			quantity: 10,
			discountType: '%',
			discountValue: 2,
			grossPrice: 3,
			netPrice: 11,
			'note': 'OK',
			grossTotalExclTax: 10,
			netTotalExclTax: 111,
			/*	'buyer': {
					'id':'const',
					'name':'buyer1'
				},*/
			mntCompte: 100,
			mntTransaction: 200
		},
		{
			id: 1,
			'designation': 'test',
			'groupement1': 'OK',
			'groupement2': 'OK',
			quantity: 10,
			discountType: 'amount',
			discountValue: 20,
			grossPrice: 3,
			netPrice: 11,
			'note': 'OK',
			grossTotalExclTax: 10,
			netTotalExclTax: 111,
			/*	'buyer': {
					'id':'const',
					'name':'buyer1'
				},*/
			mntCompte: 100,
			mntTransaction: 200
		},
	])

	const [showSecondTable, setShowSecondTable] = useState(false);
	const toggleSecondTable = () => {
		setShowSecondTable(!showSecondTable);
	};
	return (
		<div>
			<button onClick={toggleSecondTable}>
				{showSecondTable ? 'Cacher le second tableau' : 'Afficher le second tableau'}
			</button>
			{showSecondTable ? (
				<DataGrid2/>
			) : (
				<Preview>
					<DataGrid
						stickyHeader
						size='sm'
						bordered
						columns={[
							//	{ field: 'grp1' },
							{field: 'groupement1', headerName: 'groupement1', editable: false},
							{field: 'groupement2', headerName: 'groupement2', editable: true},
							{field: 'N°', headerName: 'N°', editable: true},
							{field: 'Produit', headerName: 'Produit', editable: true},
							{field: 'designation', headerName: 'Designation', editable: true},
							{field: 'quantity', headerName: 'Qte acheté', editable: true},
							{field: 'discountType', headerName: 'Type de remise', editable: true},
							{field: 'discountValue', headerName: 'Remise', editable: true},
							{field: 'grossPrice', headerName: 'prix brut', editable: true},
							{field: 'netPrice', headerName: 'prix net', editable: true},
							//{	field: 'buyer1', headerName: 'Acheteur', editable: false},
							{field: 'grossTotalExclTax', headerName: 'Mnt brut HT', editable: true},
							{field: 'netTotalExclTax', headerName: 'Mnt net HT', editable: true},
							{field: 'note', headerName: 'Commentaire', editable: true},
							{field: 'mntCompte', headerName: 'Mnt tenu de Compte (DH)', editable: true},
							{field: 'mntTransaction', headerName: 'Mnt tenu de Transaction ', editable: true},
						]}
						value={value}
						onChange={setValue}
					/>
				</Preview>
			)}
		</div>
	);
};
export default Page;
