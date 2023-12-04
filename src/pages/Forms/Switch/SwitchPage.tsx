import { COLORS } from "../../../@types/Color";
import { SIZING } from "../../../@types/Sizing";
import { Preview } from "../../../Components";
import { Switch } from "../../../Components/Switch";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex justify-center px-0">
                <Switch />
                <Switch defaultChecked />
            </Preview>
            <Preview title="Disabled State" className="flex justify-center px-0">
                <Switch disabled />
                <Switch disabled defaultChecked />
            </Preview>
            <Preview title="Sizing" className="grid grid-cols-3 items-center justify-items-center px-0">
                {SIZING.map((size) =>
                <Switch
                    key={size}
                    size={size}
                />)}
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 justify-items-center gap-6 px-0">
                {COLORS.map((item, index) => <Switch key={index} color={item} defaultChecked />)}
            </Preview>
        </div>
    )
}

export default Page;
