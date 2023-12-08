import {I18Key} from '../../main.tsx';
import {en} from './en.ts';
import {RouteEnum} from '../../@types/Route.ts';

export const fr: Record<I18Key, string> = {
  ...en,
  [RouteEnum.PurchaseOrder]: 'Bon de commandes',
  [RouteEnum.PurchaseOrderListing]: 'Liste bon de commandes',
  [RouteEnum.PurchaseOrderCreate]: 'Saisir un BC',
  [RouteEnum.PurchaseOrderDetail]: 'Detail BC',
  [RouteEnum.PurchaseOrderUpdate]: 'Modifier BC',
  [RouteEnum.PurchaseOrderDelete]: 'Supprimer BC',
  'LOGIN.TITLE': 'Connectez-vous à votre compte',
  SIGN_IN: 'Connectez-vous',
  USERNAME: 'Nom utilisateur',
  PASSWORD: 'Mot de passe',
  BUDGET: 'Budget',
  CREATED_AT: 'Date création',
  CURRENCY: 'Devise',
  DESIRED_DELIVERY_DATE: 'Réception prévue',
  EXTERNAL_REF: 'Réf. externe',
  IS_TAX_INCLUDED: 'Acronyme',
  ORDER_NUMBER: 'N°',
  REF: 'Réf.',
  VENDOR: 'Founisseur',
  SAVE: 'Enregistrer',
};