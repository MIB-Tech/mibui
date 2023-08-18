import {InputGroupAddon} from '../../../../Forms';
import SvgIcon from '../../../../Components/SvgIcon/SvgIcon.tsx';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';

export const IconAddon = () => (
  <InputGroupAddon>
    <SvgIcon icon={MagnifyingGlassIcon}/>
  </InputGroupAddon>
)