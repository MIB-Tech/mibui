import {useVariantColor} from './UseVariantColor.ts';
import {ColorType} from '../@types/Color.ts';
import {VariantType} from '../@types/Variant.ts';

type UseVariantProps = {
  color?: ColorType,
  variant?: VariantType
}
export const useVariantStyles = (props: UseVariantProps) => {
  const {background, text, outline, hover, active} = useVariantColor(props);

  return {
    background: `bg-${background}`,
    text: text && `text-${text}`,
    outline: `ring-1 ring-inset ring-${outline}`,
    hover: `hover:bg-${hover.background}`,
    active: `bg-${active.background}`,
  };
};