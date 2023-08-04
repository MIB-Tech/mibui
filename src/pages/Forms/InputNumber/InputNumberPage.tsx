import {Button, Preview} from '../../../Components';
import {InboxIcon, MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import Input from '../../../Forms/Input/Input.tsx';
import {ButtonVariant, SizeEnum} from '../../../Components/Button/Button.types.tsx';
import {FC, HTMLAttributes, ReactNode, useMemo, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {InputProps} from '../../../Forms/Input/Input.types.ts';

const InnerButton: FC<{ position?: 'left' | 'right' } & HTMLAttributes<HTMLDivElement>> = ({
                                                                                             position = 'left',
                                                                                             className,
                                                                                             ...props
                                                                                           }) => {

  return (
    <div
      className={twMerge(
        'absolute inset-y-0 flex items-center',
        position === 'left' ? 'left-0 ps-2' : 'right-0 pe-2',
        className
      )}
      {...props}
    />
  )
}

const InputGroup: FC<{ startElement?: ReactNode, endElement?: ReactNode } & HTMLAttributes<HTMLDivElement>> = (
  {
    startElement,
    endElement,
    className,
    children,
    ...props
  }
) => {

  return (
    <div
      className={twMerge('relative', className)}
      {...props}
    >
      {startElement && (
        <InnerButton>
          {startElement}
        </InnerButton>
      )}
      {endElement && (
        <InnerButton position="right">
          {endElement}
        </InnerButton>
      )}
      {children}
    </div>
  )
}

const InputNumber: FC<{ min?: number, max?: number, precision?: number } & Omit<InputProps, 'min' | 'max'>> = ({min, max}) => {
  const [value, setValue] = useState<number>()
  const increasable = useMemo<boolean>(() => {

    return typeof max !== 'undefined' && (value || 0) + 1 <= max
  }, [value, max])

  const decreasable = useMemo<boolean>(() => {

    return typeof min !== 'undefined' && (value || 0) - 1 <= min
  }, [value, min])


  return (
    <InputGroup
      startElement={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!decreasable}
          onClick={() => setValue((value || 0) - 1)}
        >
          <MinusIcon className="w-4 h-4"/>
        </Button>
      )}
      endElement={(
        <Button
          variant={ButtonVariant.Soft}
          size={SizeEnum.Small}
          icon
          disabled={!increasable}
          onClick={() => setValue((value || 0) + 1)}
        >
          <PlusIcon className="w-4 h-4"/>
        </Button>
      )}
    >
      <Input
        value={value}
        onChange={event => setValue(Number.parseInt(event.target.value))}
        type="number"
        className="ps-10 pe-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </InputGroup>
  )
}

const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview
        title="Inner Icon"
        className="flex justify-center"
      >
        <InputNumber
          step={0.1}
        />
      </Preview>
      <Preview
        title="Outer Icon"
        className="flex justify-center"
      >
        <div className="flex">
          <span
            className="inline-flex rounded-s items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <InboxIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
          </span>
          <Input
            className="rounded-none rounded-r"
            placeholder="name@flowbite.com"
          />
        </div>
      </Preview>
    </div>
  )
}

export default Page