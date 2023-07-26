import {useState} from 'react';
import {ButtonSizeEnum, ButtonVariant, ColorVariantEnum} from '../../../Components/Button/Button.types.tsx';
import {Button} from '../../../Components/Button/Button.tsx';

const Page = () => {
  const [size, setSize] = useState<ButtonSizeEnum | undefined>()
  const [disabled, setDisabled] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  return (
    <div>
      <div className="flex items-center gap-2">
        <div>
          <Button
            size={ButtonSizeEnum.Small}
            onClick={() => setSize(ButtonSizeEnum.Small)}
            active={size === ButtonSizeEnum.Small}
          >
            Small
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setSize(undefined)}
            active={!size}
          >
            Default
          </Button>
        </div>
        <div>
          <Button
            size={ButtonSizeEnum.Large}
            onClick={() => setSize(ButtonSizeEnum.Large)}
            active={size === ButtonSizeEnum.Large}
          >
            Large
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setDisabled(!disabled)}
            active={disabled}
          >
            Disabled
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setActive(!active)}
            active={active}
          >
            Active
          </Button>
        </div>
      </div>

      {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => {

        return (
          <div key={variant} className="pt-10">
            <div className="text-2xl capitalize">
              {variant}
            </div>
            <div className="flex gap-2 pt-2">
              {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
                <Button
                  key={variant + color}
                  variant={variant}
                  color={{color: color}}
                  className="capitalize"
                  size={size}
                  disabled={disabled}
                  active={active}
                >
                  {/*<BellIcon className='header-icon'/>*/}
                  {color}
                </Button>
              ))}
            </div>
          </div>
        )
      })}

      <div className="pt-10">
        <div className="text-2xl capitalize">
          Button Group
        </div>
        <div className="inline-flex pt-2" role="group">
          <Button
            className="capitalize"
            size={size}
            disabled={disabled}
            active={active}
            round={{
              end: 'none'
            }}
          >
            Button 1
          </Button>
          <Button
            className="capitalize"
            size={size}
            disabled={disabled}
            active={active}
            round={{
              start: 'none',
              end: 'none'
            }}
          >
            Button 2
          </Button>
          <Button
            className="capitalize"
            size={size}
            disabled={disabled}
            active={active}
            round={{
              start: 'none'
            }}
          >
            Button 3
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page