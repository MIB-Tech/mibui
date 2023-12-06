import {TextLogo} from '../../../../Layouts/PrivateLayout.tsx';
import {FormGroup, Input, InputPassword, Label} from '../../../../Forms';
import {Button} from '../../../../Components';

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
        <FormGroup>
          <Label>Email address</Label>
          <Input
            type='email'
            autoComplete='email'
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <InputPassword/>
        </FormGroup>
        <Button className='w-full'>
          Sign in
        </Button>
      </div>
    </div>
  </div>
);