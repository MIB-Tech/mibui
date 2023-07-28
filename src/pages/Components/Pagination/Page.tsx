import {Pagination, Preview} from '../../../Components';
import {ButtonVariant, ColorVariantEnum, SizeEnum} from '../../../Components/Button/Button.types.tsx';

const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
        <Preview key={variant} title={variant}>
          <div className="flex flex-col items-center justify-center gap-2">
            {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
              <Pagination
                key={variant + color}
                variant={variant}
                color={color}
              />
            ))}
          </div>
        </Preview>
      ))}
      <Preview title="Outline">
        <div className="flex flex-col items-center justify-center gap-10">
          {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
            <Pagination
              key={variant}
              variant={variant}
              outline
            />
          ))}
        </div>
      </Preview>
      <Preview title="Sizes">
        <div className="flex flex-col items-center justify-center gap-10">
          <Pagination size={SizeEnum.Small}/>
          <Pagination />
          <Pagination size={SizeEnum.Large}/>
        </div>
      </Preview>
      <Preview title="Simple Previous/Next">
        <div className="flex flex-col items-center justify-center gap-10">
          <Pagination pageLess/>
        </div>
      </Preview>
      <Preview title="With icons">
        <div className="flex flex-col items-center justify-center gap-10">
          <Pagination icon/>
        </div>
      </Preview>
    </div>
  )
}

export default Page