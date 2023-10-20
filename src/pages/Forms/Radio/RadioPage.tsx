import { COLORS } from "../../../@types/Color";
import { Preview } from "../../../Components";
import Radio from "../../../Components/Radio/Radio";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex items-center justify-center gap-10 px-0">
                <Radio />
                <Radio defaultChecked />
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center px-0">
                {COLORS.map((color, index) =>
                <Radio 
                    key={index} 
                    color={color} 
                    defaultChecked
                />)}
            </Preview>
            <Preview title="Sizing" className="flex items-center justify-center gap-10 px-0">
                <Radio defaultChecked />
                <Radio size="md" defaultChecked />
                <Radio size="lg" defaultChecked />
            </Preview>
            <Preview title="States" className="flex items-center justify-center gap-10 px-0">
                <Radio disabled />
                <Radio disabled defaultChecked />
            </Preview>
        </div>
    )
}

export default Page;
