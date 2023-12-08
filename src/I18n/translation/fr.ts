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
  'SIGN_IN': 'Connectez-vous',
  'USERNAME': 'Nom utilisateur',
  'PASSWORD': 'Mot de passe',
};