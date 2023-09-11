import {Preview, Spinner} from '../../../Components';
import {ColorVariantEnum, SizeEnum} from '../../../Components/Button/Button.types.tsx';

const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Colors">
        <div className="flex items-center justify-center gap-2">
          {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
            <Spinner key={color} color={color}/>
          ))}
        </div>
      </Preview>
      <Preview title="Sizes">
        <div className="flex items-center justify-center gap-2">
          <Spinner size={SizeEnum.Small}/>
          <Spinner />
          <Spinner size={SizeEnum.Large}/>
        </div>
      </Preview>
    </div>
  )
}

export default Page