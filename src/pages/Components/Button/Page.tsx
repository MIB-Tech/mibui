import {ButtonVariant, ColorVariantEnum, SizeEnum} from '../../../Components/Button/Button.types.tsx';
import {Preview} from '../../../Components/Preview';
import {Button} from '../../../Components';

const Page = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
          <Preview key={variant} title={variant} className="capitalize">
            <div className="flex justify-center gap-2">
              {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
                <Button
                  key={variant + color}
                  variant={variant}
                  color={color}
                  className="capitalize"
                >
                  {color}
                </Button>
              ))}
            </div>
          </Preview>
        ))}

        <Preview title="Outline" className="capitalize">
          <div className="flex justify-center gap-2">
            {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
              <Button
                key={variant}
                variant={variant}
                className="capitalize"
                outline
              >
                {variant}
              </Button>
            ))}
          </div>
        </Preview>

        <Preview title="Size" className="capitalize">
          <div className="flex items-center justify-center gap-2">
            <Button className="capitalize" size={SizeEnum.Small}>
              Small
            </Button>
            <Button className="capitalize">
              Default
            </Button>
            <Button className="capitalize" size={SizeEnum.Large}>
              Large
            </Button>
          </div>
        </Preview>
        <Preview title="Disbaled" className="capitalize">
          <div className="flex justify-center gap-2">
            {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
              <Button
                key={variant}
                variant={variant}
                className="capitalize"
                disabled
              >
                {variant}
              </Button>
            ))}
          </div>
        </Preview>
        <Preview title="Active" className="capitalize">
          <div className="flex items-center justify-center gap-2">
            <Button active>
              Active
            </Button>
          </div>
        </Preview>
        <Preview title="Loading" className="capitalize">
          <div className="flex items-center justify-center gap-2">
            <Button className="capitalize" loading>
              Loading
            </Button>
          </div>
        </Preview>
      </div>
    </div>
  )
}

export default Page