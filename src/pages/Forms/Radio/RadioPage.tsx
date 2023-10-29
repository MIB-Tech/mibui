import { COLORS } from "../../../@types/Color";
import { Preview } from "../../../Components";
import Radio from "../../../Components/Radio/Radio";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex items-center justify-center gap-10 px-0">
                <Radio defaultChecked name="default-group" />
                <Radio name="default-group" />
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center px-0">
                {COLORS.map((color, index) =>
                <Radio 
                    key={index} 
                    color={color}
                    id={`radio-color-${index}`}
                    name={`radio-color-group`}
                    defaultChecked={index === 0 ? true : false}
                />)}
            </Preview>
            <Preview title="Sizing" className="flex items-center justify-center gap-10 px-0">
                <Radio name="rd-group" defaultChecked />
                <Radio size="md" name="rd-group" />
                <Radio size="lg" name="rd-group" />
            </Preview>
            <Preview title="States" className="flex items-center justify-center gap-10 px-0">
                <Radio disabled defaultChecked />
                <Radio disabled />
            </Preview>
        </div>
    )
}

export default Page;
