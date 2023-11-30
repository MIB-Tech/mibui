import React from 'react';
import {Preview} from '../../../Components';
import {SIZING} from '../../../@types/Sizing.ts';
import {BORDER_STYLES} from '../../../Components/Table/Table.types.tsx';
import {TableExample} from './TableExample.tsx';


const Page: React.FC = () => {
/*	const constants: string[] = [
		'constant1',
		'constant2',
		'constant3',
		'constant4',
		'constant5',
		'constant6',
		'constant7',
	];*/
	return (
		<div className='flex flex-col gap-12'>
			<Preview className='flex justify-center' title='Default'>
				<TableExample/>
			</Preview>
			<Preview className='flex flex-col items-center justify-center gap-5' title='Sizing'>
				{SIZING.map(size => (
					<TableExample key={size} size={size}/>
				))}
			</Preview>
			<Preview className='flex flex-col items-center justify-center' title='Bordered'>
				<TableExample bordered/>
			</Preview>
			<Preview title='Border Style' className='flex flex-col items-center justify-center gap-5'>
				{BORDER_STYLES.map(borderStyle => (
					<div className=''>
						<div className='capitalize'>{borderStyle}</div>
						<TableExample borderStyle={borderStyle}/>
					</div>
				))}
			</Preview>
			<Preview className='flex flex-col items-center justify-center' title='hoverable'>
				<TableExample hoverable/>
			</Preview>
			<Preview title='Scrollable with sticky headers' className='flex flex-col items-center justify-center'>
				<TableExample
					className='max-h-80 max-w-[600px]'
					perPage={50}
					stickyColumn
					stickyHeader
				/>
			</Preview>

			<Preview>
			{/*	<Tablesheet
					constants={constants}
					start={10}
					step={1.5}
					end={22}
					//perPage={50}
					className='max-h-80 '
					stickyHeader
					stickyColumn
					hoverable
					bordered
				/>*/}
			</Preview>

		</div>);
};

export default Page;