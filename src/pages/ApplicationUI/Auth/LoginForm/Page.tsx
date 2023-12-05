import {Button, Preview} from '../../../../Components';
import {TextLogo} from '../../../../Layouts/PrivateLayout.tsx';
import {FormControl, Input, InputPassword, Label} from '../../../../Forms';
import RegisterFormExample from '../RegisterForm/Page.tsx';


export const LoginFormExample = () => (
	<div>
		<div className='sm:mx-auto sm:w-full sm:max-w-sm text-center'>
			<TextLogo className='text-5xl'/>
			<h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
				Sign in to your account
			</h2>
		</div>
		<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
			<div className='space-y-6'>
				<FormControl>
					<Label>Email address</Label>
					<Input
						type='email'
						autoComplete='email'
					/>
				</FormControl>
				<FormControl>
					<Label>Password</Label>
					<InputPassword/>
				</FormControl>
				<Button className='w-full'>
					Sign in
				</Button>
			</div>
		</div>
	</div>
);

const Page = () => (
	<div className='flex flex-col gap-12'>
		<Preview title='Sign In' className='justify-center'>
			<LoginFormExample/>
		</Preview>
		<Preview title='Sign Up' className='justify-center'>
			<RegisterFormExample/>
		</Preview>
	</div>
);


export default Page;
