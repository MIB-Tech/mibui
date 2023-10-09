import {Preview} from "../../../Components";
import Checkbox from "../../../Components/Checkbox/Checkbox.tsx";
import {COLORS} from "../../../@types/Color.ts";

const Page = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Preview title="Default" className="justify-center">
        <Checkbox defaultChecked/>
      </Preview>
      <Preview title="Colors">
        <div className='flex justify-center gap-2'>
          {COLORS.map(color => (
            <Checkbox
              key={color}
              color={color}
              defaultChecked
            />
          ))}
        </div>
      </Preview>
      <Preview title="States">
        <div className="flex justify-center gap-2">
          <Checkbox disabled defaultChecked/>
        </div>
      </Preview>
      <Preview title="Size">
        <div className="flex justify-center items-center	gap-10">
          <Checkbox className="flex" size='sm' defaultChecked/>
          <Checkbox className="flex" defaultChecked/>
          <Checkbox className="flex" size="lg" defaultChecked/>
        </div>
      </Preview>
    </div>
  )
}
export default Page