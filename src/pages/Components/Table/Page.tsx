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
}, {
	id: 'pay_description2_fe', amount: 50, email: 'mibtech@mibtech.ma', createdAt: date
},]
const Page: React.FC = () => {
	return (
		<div className="flex flex-col gap-12">
			<Preview className="flex flex-col items-center justify-center" title="Default">
				<Table   >
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview className="flex flex-col items-center justify-center" title="Small">
				<Table size='sm'>
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview className="flex flex-col items-center justify-center" title="Large">
				<Table size='lg'>
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview className="flex flex-col items-center justify-center" title="Meduim">
				<Table size='md'>
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview title={"Style"} className="">
				<div className="flex flex-col space-y-4 items-center">
					Solid
					<div>
						<Table stickyHeader size='sm' borderLess={BorderEnum.Solid}>
							<TableHead>
								<TableHeadCell>Header 1</TableHeadCell>
								<TableHeadCell>Header 2</TableHeadCell>
								<TableHeadCell>Header 3</TableHeadCell>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
					None
					<div>
						<Table  borderLess={BorderEnum.None}>
							<TableHead>
								<TableHeadCell>Header 1</TableHeadCell>
								<TableHeadCell>Header 2</TableHeadCell>
								<TableHeadCell>Header 3</TableHeadCell>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
					Dotted
					<div>
						<Table size='sm' borderLess={BorderEnum.Dotted}>
							<TableHead>
								<TableHeadCell>Header 1</TableHeadCell>
								<TableHeadCell>Header 2</TableHeadCell>
								<TableHeadCell>Header 3</TableHeadCell>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
					Dashed
					<div>
						<Table size='sm' borderLess={BorderEnum.Dashed}>
							<TableHead>
								<TableHeadCell>Header 1</TableHeadCell>
								<TableHeadCell>Header 2</TableHeadCell>
								<TableHeadCell>Header 3</TableHeadCell>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
								<TableRow>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
									<TableRowCell>Cell 1</TableRowCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>

			</Preview>
			<Preview className="flex flex-col items-center justify-center" title="Hoverable">
				<Table showHover={true}>
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview className="flex flex-col items-center justify-center" title="Bordered">
				<Table showBorder>
					<TableHead>
						<TableHeadCell>Header 1</TableHeadCell>
						<TableHeadCell>Header 2</TableHeadCell>
						<TableHeadCell>Header 3</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
						<TableRow>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
							<TableRowCell>Cell 1</TableRowCell>
						</TableRow>
					</TableBody>
				</Table>
			</Preview>
			<Preview title="Example" className="flex flex-col items-center justify-center">
				<Table showHover stickyHeader  size='sm'>
					<TableHead>
						<TableHeadCell data-first>AMOUNT</TableHeadCell>
						<TableHeadCell>DESCRIPTION</TableHeadCell>
						<TableHeadCell>CUSTOMER</TableHeadCell>
						<TableHeadCell>DATE</TableHeadCell>
						<TableHeadCell>DATE</TableHeadCell>
						<TableHeadCell>DATE</TableHeadCell>
						<TableHeadCell>DATE</TableHeadCell>
					</TableHead>

					<TableBody>
						{DATA.map((payment) => (<TableRow key={payment.id}>
							<TableRowCell data-first>{payment.amount}$ </TableRowCell>
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
			<Table showBorder borderLess={BorderEnum.Dashed} showHover stickyHeader size='md'>
				<TableHead>
					<TableHeadCell data-first>AMOUNT</TableHeadCell>
					<TableHeadCell>DESCRIPTION</TableHeadCell>
					<TableHeadCell>CUSTOMER</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>
					<TableHeadCell>DATE</TableHeadCell>

				</TableHead>

				<TableBody>
					{DATA.map((payment) => (<TableRow key={payment.id}>
						<TableRowCell data-first>{payment.amount}$ </TableRowCell>
						<TableRowCell>{payment.id}</TableRowCell>
						<TableRowCell>{payment.email}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>
						<TableRowCell>{payment.createdAt}</TableRowCell>

					</TableRow>))}
				</TableBody>
			</Table>

		</div>
	)
};

export default Page;