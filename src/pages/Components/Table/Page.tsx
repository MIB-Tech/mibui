import React from "react";
import TableRowCell from "../../../Components/Table/Body/Table.Row.Cell.tsx";
import TableBody from "../../../Components/Table/Body/Table.Body.tsx";
import {Preview} from "../../../Components";
import TableHeadCell from "../../../Components/Table/Head/Table.Head.Cell.tsx";
import TableHead from "../../../Components/Table/Head/Table.Head.tsx";
import TableRow from "../../../Components/Table/Body/Table.Row.tsx";
import Table from "../../../Components/Table/Table.tsx";
import {BorderEnum} from "../../../Components/Table/Table.types.tsx";


const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}/${current.getHours()}h:${current.getMinutes()}`;
type Payment = {
	id: string, amount: number, email: string, createdAt: string
}
const DATA: Array<Payment> = [{
	id: 'pay_description1_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description3_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
},]
const Page: React.FC = () => {

	return (
		<div className="flex flex-col gap-12">

		<Preview className="flex flex-col items-center justify-center" title="Default">
			<Table>
				<TableHead>
					<TableHeadCell>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>
				<TableBody>
					{DATA.slice(0, 3).map((payment, index) => (<TableRow key={index}>
						<TableRowCell>{payment.amount}$</TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
					</TableRow>))}
				</TableBody>
			</Table>
		</Preview>
		<Preview className="flex flex-col items-center justify-center" title="Small">
			<Table size='sm'>
				<TableHead>
					<TableHeadCell>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>
				<TableBody>
					{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
						<TableRowCell>{payment.amount}$</TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
					</TableRow>))}

				</TableBody>
			</Table>
		</Preview>
		<Preview className="flex flex-col items-center justify-center" title="Large">
			<Table size='lg'>
				<TableHead>
					<TableHeadCell>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>
				<TableBody>
					{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
						<TableRowCell>{payment.amount}$</TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
					</TableRow>))}

				</TableBody>
			</Table>
		</Preview>
		<Preview title='Style'>
			<div className="grid grid-rows-4 grid-flow-col gap-4">
				<div>
					<p className="text-center">Solid</p>
					<Table borderStyle={BorderEnum.Solid} size="sm">
						<TableHead>
							<TableHeadCell>AMOUNT</TableHeadCell>
							<TableHeadCell>DESCRIPTION</TableHeadCell>
							<TableHeadCell>CUSTOMER</TableHeadCell>
							<TableHeadCell>DATE</TableHeadCell>
						</TableHead>
						<TableBody>
							{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
								<TableRowCell>{payment.amount}$</TableRowCell>
								<TableRowCell>{payment.id}</TableRowCell>
								<TableRowCell>{payment.email}</TableRowCell>
								<TableRowCell>{payment.createdAt}</TableRowCell>
							</TableRow>))}

						</TableBody>
					</Table>
				</div>
				<div>
					<p className="text-center">Dotted</p>
					<Table borderStyle={BorderEnum.Dotted} size="sm">
						<TableHead>
							<TableHeadCell>AMOUNT</TableHeadCell>
							<TableHeadCell>DESCRIPTION</TableHeadCell>
							<TableHeadCell>CUSTOMER</TableHeadCell>
							<TableHeadCell>DATE</TableHeadCell>
						</TableHead>
						<TableBody>
							{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
								<TableRowCell>{payment.amount}$</TableRowCell>
								<TableRowCell>{payment.id}</TableRowCell>
								<TableRowCell>{payment.email}</TableRowCell>
								<TableRowCell>{payment.createdAt}</TableRowCell>
							</TableRow>))}

						</TableBody>
					</Table>
				</div>
				<div>
					<p className="text-center">None</p>
					<Table borderStyle={BorderEnum.None} size="sm">
						<TableHead>
							<TableHeadCell>AMOUNT</TableHeadCell>
							<TableHeadCell>DESCRIPTION</TableHeadCell>
							<TableHeadCell>CUSTOMER</TableHeadCell>
							<TableHeadCell>DATE</TableHeadCell>
						</TableHead>
						<TableBody>
							{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
								<TableRowCell>{payment.amount}$</TableRowCell>
								<TableRowCell>{payment.id}</TableRowCell>
								<TableRowCell>{payment.email}</TableRowCell>
								<TableRowCell>{payment.createdAt}</TableRowCell>
							</TableRow>))}

						</TableBody>
					</Table>
				</div>
				<div>
					<p className="text-center">Dashed</p>
					<Table borderStyle={BorderEnum.Dashed} size="sm">
						<TableHead>
							<TableHeadCell>AMOUNT</TableHeadCell>
							<TableHeadCell>DESCRIPTION</TableHeadCell>
							<TableHeadCell>CUSTOMER</TableHeadCell>
							<TableHeadCell>DATE</TableHeadCell>
						</TableHead>
						<TableBody>
							{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
								<TableRowCell>{payment.amount}$</TableRowCell>
								<TableRowCell>{payment.id}</TableRowCell>
								<TableRowCell>{payment.email}</TableRowCell>
								<TableRowCell>{payment.createdAt}</TableRowCell>
							</TableRow>))}

						</TableBody>
					</Table></div>
			</div>
		</Preview>
		<Preview className="flex flex-col items-center justify-center" title="Hoverable">
			<Table Hoverable={true}>
				<TableHead>
					<TableHeadCell>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>
				<TableBody>
					{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
						<TableRowCell>{payment.amount}$</TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
					</TableRow>))}

				</TableBody>
			</Table>
		</Preview>
		<Preview className="flex flex-col items-center justify-center" title="Bordered">
			<Table borderLess>
				<TableHead>
					<TableHeadCell>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>
				<TableBody>
					{DATA.slice(0, 3).map((payment) => (<TableRow key={payment.id}>
						<TableRowCell>{payment.amount}$</TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
					</TableRow>))}
				</TableBody>
			</Table>
		</Preview>
		<Preview title="Example" className="flex flex-col bg-transparent">
			<Table Hoverable stickyHeader stickyColumn borderStyle={BorderEnum.Solid} >
				<TableHead>
					<TableHeadCell  >AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
				</TableHead>

				<TableBody>
					{DATA.map((payment) => (
						<TableRow key={payment.id}>
						<TableRowCell >{payment.amount}$ </TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>

					</TableRow>))}
				</TableBody>
			</Table>


		</Preview>


		{/*
Table de test
*/}


	</div>)
};

export default Page;