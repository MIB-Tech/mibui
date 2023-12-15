import {I18Key} from '../../main.tsx';
import {en} from './en.ts';
import {RouteEnum} from '../../@types/Route.ts';

export const fr: Record<I18Key, string> = {
  ...en,
  [RouteEnum.Home]: 'Accueil',
  [RouteEnum.PurchaseOrder]: 'Bon de commandes',
  [RouteEnum.PurchaseOrderListing]: 'Liste bon de commandes',
  [RouteEnum.PurchaseOrderCreate]: 'Saisir un BC',
  [RouteEnum.PurchaseOrderDetail]: 'Detail BC',
  [RouteEnum.PurchaseOrderUpdate]: 'Modifier BC',
  [RouteEnum.PurchaseOrderDelete]: 'Supprimer BC',
  [RouteEnum.Receipt]: 'Bon de réceptions',
  [RouteEnum.ReceiptListing]: 'Liste Bon de réceptions',
  [RouteEnum.ReceiptCreate]: 'Saisir un BR',
  [RouteEnum.ReceiptDetail]: 'Detail BR',
  [RouteEnum.ReceiptUpdate]: 'Modifier BR',
  [RouteEnum.ReceiptDelete]: 'Supprimer BR',
  'LOGIN.TITLE': 'Connectez-vous à votre compte',
  SIGN_IN: 'Connectez-vous',
  USERNAME: 'Nom utilisateur',
  PASSWORD: 'Mot de passe',
  CREATED_AT: 'Date création',
  CURRENCY: 'Devise',
  DESIRED_DELIVERY_DATE: 'Réception prévue',
  EXTERNAL_REF: 'Réf. externe',
  IS_TAX_INCLUDED: 'Acronyme',
  ORDER_NUMBER: 'N°',
  REF: 'Réf.',
  VENDOR: 'Founisseur',
  SAVE: 'Enregistrer',
  RECEIPT_NUMBER: 'Receipt Number',
  RECEIVED_AT: 'Received At',
};