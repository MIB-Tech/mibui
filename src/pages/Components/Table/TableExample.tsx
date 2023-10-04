import moment from 'moment/moment';
import {FC} from 'react';
import {TableProps} from '../../../Components/Table/Table.types.tsx';
import {Table, TableBody, TableHead, TableHeadCell, TableRow, TableRowCell} from '../../../Components';

type Payment = {
  id: string
  amount: number
  fee: number
  email: string
  createdAt: string
  group?: string
  status: typeof statuses[number]
  liveMode?: boolean
  paymentMethod: typeof paymentMethods[number]
}
const paymentMethods = ['Credit Card', 'Payal', 'Google Pay', 'Apple Pay'] as const;
const statuses = ['Completed', 'Pending'] as const;
const DATA: Array<Payment> = [...Array(10).keys()].map(key => ({
  id: `pi_000000000${key}`,
  amount: 50,
  fee: 10,
  group: `order_${key}`,
  liveMode: key % 3 === 0,
  paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
  status: statuses[Math.floor(Math.random() * statuses.length)],
  email: `user.${key}@mibtech.ma`,
  createdAt: moment().format('L'),
}));
export const TableExample: FC<TableProps & { perPage?: number }> = ({perPage = 3, ...props}) => (
  <Table {...props}>
    <TableHead>
      <TableHeadCell>Payment ID</TableHeadCell>
      <TableHeadCell>Amount</TableHeadCell>
      <TableHeadCell>Fee</TableHeadCell>
      <TableHeadCell>Customer</TableHeadCell>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Transfer group</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
      <TableHeadCell>Live Mode</TableHeadCell>
      <TableHeadCell>Payment Method</TableHeadCell>
    </TableHead>
    <TableBody>
      {DATA.slice(0, perPage).map(({id, amount, fee, email, createdAt, group, status, liveMode, paymentMethod}) => (
        <TableRow key={id}>
          <TableRowCell>{id}$</TableRowCell>
          <TableRowCell>{amount}$</TableRowCell>
          <TableRowCell>{fee}$</TableRowCell>
          <TableRowCell>{email}</TableRowCell>
          <TableRowCell>{createdAt}</TableRowCell>
          <TableRowCell>{group}</TableRowCell>
          <TableRowCell>{status}</TableRowCell>
          <TableRowCell>{liveMode ? 'Yes' : 'No'}</TableRowCell>
          <TableRowCell>{paymentMethod}</TableRowCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);