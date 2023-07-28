import {Button, Preview} from '../../../Components';
import {ButtonVariant, ColorVariantEnum, SizeEnum} from '../../../Components/Button/Button.types.tsx';
import ButtonGroup from '../../../Components/ButtonGroup/ButtonGroup.tsx';

const Page = () => {
  return (
    <div className="flex flex-col gap-12">
      {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
        <Preview key={variant} title={variant} className="capitalize">
          <div className="flex flex-col items-center justify-center gap-2">
            {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
              <ButtonGroup key={color} color={color} variant={variant}>
                <Button>Option 1</Button>
                <Button>Option 2</Button>
                <Button>Option 3</Button>
              </ButtonGroup>
            ))}
          </div>
        </Preview>
      ))}
      <Preview title="Outline" className="capitalize">
        <div className="flex justify-center gap-10">
          {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
            <div className="flex flex-col justify-center gap-2">
              {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
                <ButtonGroup key={color} color={color} variant={variant} outline>
                  <Button>Option 1</Button>
                  <Button>Option 2</Button>
                  <Button>Option 3</Button>
                </ButtonGroup>
              ))}
            </div>
          ))}
        </div>
      </Preview>
      <Preview title="Vertical" className="capitalize">
        <div className="flex justify-center gap-10">
          {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
            <ButtonGroup key={variant} variant={variant} vertical>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          ))}
          {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
            <ButtonGroup key={variant} variant={variant} vertical outline>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          ))}
        </div>
      </Preview>
      <Preview title="Sizes" className="capitalize">
        <div className="flex justify-center items-center gap-10">
          <div>
            <ButtonGroup size={SizeEnum.Small}>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup size={SizeEnum.Large}>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          </div>
        </div>
      </Preview>
      <Preview title="Active" className="capitalize">
        <div className="flex justify-center items-center gap-10">
          <ButtonGroup>
            <Button>Option 1</Button>
            <Button active>Active</Button>
            <Button>Option 3</Button>
          </ButtonGroup>
        </div>
      </Preview>
      <Preview title="Disabled" className="capitalize">
        <div className="flex justify-center items-center gap-10">
          <ButtonGroup>
            <Button>Option 1</Button>
            <Button>Option 2</Button>
            <Button disabled>Disabled</Button>
          </ButtonGroup>
        </div>
      </Preview>
    </div>
  )
}

export default Page