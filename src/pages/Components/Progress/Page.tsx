import {Preview, Progress} from "../../../Components";
import {SIZING} from "../../../@types/Sizing.ts";
import {COLORS} from "../../../@types/Color.ts";

const Page = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Preview title='default'>
        <Progress state={50}/>
      </Preview>
      <Preview title='state'>
        <Progress state={0}/>
        <Progress state={25}/>
        <Progress state={50}/>
        <Progress state={75}/>
        <Progress state={100}/>
      </Preview>
      <Preview title="size">
        {SIZING.map(size => (
          <Progress key={size} state={50} size={size}/>
        ))}
      </Preview>
      <Preview title='with label'>
        <Progress state={50} label/>
      </Preview>
      <Preview title='color'>
        {COLORS.map(color => (
          <Progress key={color} state={50} color={color}/>
        ))}
      </Preview>
    </div>
  )
}

export default Page