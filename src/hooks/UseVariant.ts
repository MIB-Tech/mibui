import {useVariantColor} from './UseVariantColor.ts';
import {ColorType} from '../@types/Color.ts';
import {VariantType} from '../@types/Variant.ts';

export const useVariant = (props: { color?: ColorType, variant?: VariantType }) => {
  const {background, text, outline, hover, active} = useVariantColor(props);

  return {
    background: `bg-${background}`,
    text: `text-${text}`,
    outline: `ring-1 ring-inset ring-${outline}`,
    hover: `hover:bg-${hover.background}`,
    active: `bg-${active.background}`,
  };
};