import {Button, Preview} from '../../../Components';
import {InputGroup} from '../../../Forms';
import Input from '../../../Forms/Input/Input.tsx';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {SizeEnum} from '../../../Components/Button/Button.types.tsx';


const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="With leading">
        <InputGroup
          leading={<MagnifyingGlassIcon className="ms-3 w-5 h-5 text-gray-500"/>}
        >
          <Input
            className="ps-10 w-full"
            placeholder="Search..."
          />
        </InputGroup>
      </Preview>
      <Preview title="With trailing">
        <InputGroup
          trailing={<Button className="me-2" size={SizeEnum.Small}>Search</Button>}
        >
          <Input
            className="pe-20 w-full"
            placeholder="Search..."
          />
        </InputGroup>
      </Preview>
      <Preview title="With leading and trailing">
        <InputGroup
          leading={<MagnifyingGlassIcon className="ms-3 w-5 h-5 text-gray-500"/>}
          trailing={<Button className="me-2" size={SizeEnum.Small}>Search</Button>}
        >
          <Input
            className="ps-10 pe-20 w-full"
            placeholder="Search..."
          />
        </InputGroup>
      </Preview>
    </div>
  )
}

export default Page