import { COLORS } from "../../../@types/Color";
import { SIZING } from "../../../@types/Sizing";
import { Preview } from "../../../Components";
import Radio from "../../../Components/Radio/Radio";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex items-center justify-center gap-10 px-0">
                <Radio />
                <Radio defaultChecked />
            </Preview>
            <Preview title="Colors" className="grid grid-flow-col justify-center gap-10">
                {COLORS.map((color, index) => (
                    <Radio 
                        key={index}
                        color={color}
                        id={`radio-color-${index}`}
                        defaultChecked
                    />
                ))}
            </Preview>
            <Preview title="Sizing" className="flex items-center justify-center gap-10 px-0">
                {SIZING.map((size, index) =>
                <Radio
                    key={index}
                    size={size}
                />)}
            </Preview>
            <Preview title="States" className="flex items-center justify-center gap-10 px-0">
                <Radio disabled />
                <Radio disabled defaultChecked />
            </Preview>
        </div>
    )
}

export default Page;
