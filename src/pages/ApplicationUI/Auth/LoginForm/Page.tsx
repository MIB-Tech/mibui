import {Preview} from '../../../../Components';
import {LoginFormExample} from './LoginFormExample.tsx';

const Page = () => (
	<div className='flex flex-col gap-12'>
		<Preview title='Default' className='justify-center'>
			<LoginFormExample/>
		</Preview>
	</div>
);


export default Page;
