import { COLORS } from "../../../@types/Color";
import { Preview } from "../../../Components";
import Radio from "../../../Components/Radio/Radio";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="grid grid-cols-2 gap-6 justify-items-center">
                <Radio />
                <Radio defaultChecked />
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center">
                {COLORS.map((color, index) =>
                <Radio 
                    key={index} 
                    color={color} 
                    defaultChecked
                />)}
            </Preview>
        </div>
    )
}

export default Page;
