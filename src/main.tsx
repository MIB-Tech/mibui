import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouteEnum} from './@types/Route';
import i18next, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import moment from 'moment/moment';
import 'moment/dist/locale/fr';
import App from './App.tsx';
import {en} from './I18n/translation/en.ts';
import {fr} from './I18n/translation/fr.ts';
import axios from 'axios';

enum Lang {
  English = 'en',
  French = 'fr'
}

moment.locale(Lang.French);

export type I18Key = RouteEnum |
  'LOGIN.TITLE' |
  'SIGN_IN' |
  'USERNAME' |
  'PASSWORD'

const resources: Resource = {
  [Lang.English]: {
    translation: en
  },
  [Lang.French]: {
    translation: fr
  }
};
i18next.use(initReactI18next).init({
  lng: Lang.French,
  debug: true,
  resources
}).then(() => {
});

export const useLocale = () => ({
  locale: Lang.French
});

axios.defaults.baseURL = import.meta.env.VITE_API_URL
// axios.interceptors.request.use(
//   config => {
//     // const token = localStorageService.getAccessToken()
//     // if (token) {
//     //   config.headers['Authorization'] = 'Bearer ' + token
//     // }
//     // config.headers['Content-Type'] = 'application/json';
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
