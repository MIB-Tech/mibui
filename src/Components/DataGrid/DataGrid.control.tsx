// DataGridControl.tsx
import React, { FC } from 'react';
import { Input } from '../../Forms';

export type DataGridControlProps ={
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataGridControl: FC<DataGridControlProps> = ({ value, onChange }) => {
	return (
		<Input
			autoFocus
			value={value}
			onChange={onChange}
		/>
	);
};

export default DataGridControl;
