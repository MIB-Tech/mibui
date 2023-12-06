import {TextLogo} from '../../../Layouts/PrivateLayout.tsx';
import {Button} from '../../../Components';
import {Formik, FormikProps} from 'formik';
import {Trans} from 'react-i18next';
import {FormValue, ResponseData} from './Login.types.ts';
import {InputFieldGroup, InputPasswordFieldGroup} from '../../../Formik';
import {initialValues, validationSchema} from './Login.utils.ts';
import {useMutation} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {useNavigate} from 'react-router-dom';
import {atom, useRecoilState} from 'recoil';
import InputNumberFieldGroup from "../../../Formik/Fields/InputNumberField/InputNumberField.Group.tsx";

export const JWT_TOKEN_STATE = atom({
    key: 'token',
    default: localStorage.getItem('token') || null,
});

const Login = () => {
    const navigate = useNavigate();
    const [, setToken] = useRecoilState(JWT_TOKEN_STATE);
    const {mutate, isPending} = useMutation<AxiosResponse<ResponseData>, any, FormValue>({
        mutationFn: credentials => axios.post('/custom/auth/login', credentials),
        onSuccess: response => {
            const {token, refreshToken} = response.data;

            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
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
                            <InputNumberFieldGroup name='number'/>

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