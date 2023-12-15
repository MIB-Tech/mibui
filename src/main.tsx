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

enum Lang {
  English = 'en',
  French = 'fr'
}

moment.locale(Lang.French);

export type I18Key = RouteEnum |
  'SAVE' |
  'LOGIN.TITLE' |
  'SIGN_IN' |
  'USERNAME' |
  'PASSWORD' |
  'ORDER_NUMBER' |
  'RECEIPT_NUMBER' |
  'RECEIVED_AT' |
  'REF' |
  'EXTERNAL_REF' |
  'CREATED_AT' |
  'VENDOR' |
  'IS_TAX_INCLUDED' |
  'DESIRED_DELIVERY_DATE' |
  'CURRENCY'

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


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
