import {  } from 'react'
import { topContainer, titleClasses, mainContainer } from '../../../../assets/classes'
import { TextLogo } from '../../../../Layouts/PrivateLayout'
import { FormControl, Input, InputPassword, Label } from '../../../../Forms'
import { Button } from '../../../../Components'
import { Link } from 'react-router-dom'


const RegisterFormExample = () => {

  const termClasses: String = 'text-blue-600 ml-1 hover:underline dark:text-blue-500';

  return (
    <>
      <div className={`${topContainer}`}>
        <TextLogo className='text-5xl'/>
        <h2 className={`${titleClasses}`}>
          Create your account
        </h2>
      </div>


      <div className={`${mainContainer}`} >
      <div className='space-y-6'>

        <FormControl>
          <div className="mb-5">
            <Label  className="text-start">Your email</Label>
            <Input 
              type="email" 
              id="email"  
              placeholder="name@mibui.com"
              className='text-md font-normal'
              required
              />
          </div>
          </FormControl>

          <FormControl>
          <div className="mb-5">
            <Label  className="text-start">Your password</Label>
            <InputPassword 
              required
            />
          </div>
          <FormControl/>

          <FormControl>
          <div className="mb-5">
            <Label  
              className="text-start">
                Repeat password
            </Label>
            <Input 
              type="password" className="" required/>
          </div>
          </FormControl>

          <FormControl>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <Input 
                type="checkbox" 
                className="p-1" 
                required
              />
            </div>
            <Label className="ml-1">
              I agree with the 
              <Link 
                to="#" 
                className={`${termClasses}`}
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          </FormControl>

          <Button 
            type="submit" 
            className="w-full"
          >
            Register new account
          </Button>
          
        </FormControl>
        </div>
      </div>
    </>
  )
}

export default RegisterFormExample
