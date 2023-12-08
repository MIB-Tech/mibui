import {TextLogo} from '../../../Layouts/PrivateLayout.tsx';
import {Button} from '../../../Components';
import {Formik, FormikProps} from 'formik';
import {Trans} from 'react-i18next';
import {AuthState, FormValue} from './Login.types.ts';
import {InputFieldGroup, InputPasswordFieldGroup} from '../../../Formik';
import {initialValues, validationSchema} from './Login.utils.ts';
import {useMutation} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {useNavigate} from 'react-router-dom';
import {atom, useRecoilState} from 'recoil';
import {useEffect} from 'react';
import InputNumberFieldGroup from "../../../Formik/Fields/InputNumberField/InputNumberField.Group.tsx";
import DatePickerFieldGroup from "../../../Formik/Fields/DatePickerField/DatePickerField.Group.tsx";

const localStorageAuth = localStorage.getItem('auth');
export const AUTH_STATE = atom<AuthState | undefined>({
  key: 'auth',
  default: localStorageAuth ? JSON.parse(localStorageAuth) : undefined
});


export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(AUTH_STATE);
  const navigate = useNavigate();

  const logout = () => {
    setAuth(undefined);
    navigate('/');
  };

  useEffect(()=>{
    if (auth) {
      localStorage.setItem('auth', JSON.stringify(auth));
    } else {
      localStorage.removeItem('auth');
    }
  }, [auth])

  return {
    auth,
    setAuth,
    logout
  };
};

const Login = () => {
  const navigate = useNavigate();
  const {setAuth} = useAuth();
  const {mutate, isPending} = useMutation<AxiosResponse<AuthState>, any, FormValue>({
    mutationFn: credentials => axios.post('/custom/auth/login', credentials),
    onSuccess: ({data}) => {
      setAuth(data);
      navigate('/');
    }
  });


  return (
    <div>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm text-center'>
        <TextLogo className='text-5xl'/>
        <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          <Trans i18nKey='LOGIN.TITLE'/>
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={mutate}
      >
        {({handleSubmit}: FormikProps<FormValue>) => (
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <div className='space-y-6'>
              <InputFieldGroup name='username'/>
              <InputPasswordFieldGroup name='password'/>
              <Button
                className='w-full'
                onClick={() => handleSubmit()}
                loading={isPending}
              >
                <Trans i18nKey='SIGN_IN'/>
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;