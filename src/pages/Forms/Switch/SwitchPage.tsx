import { COLORS } from "../../../@types/Color";
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
                <Switch size="sm" />
                <Switch size="md" />
                <Switch size="lg" />
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center px-0">
                {COLORS.map((item, index) => <Switch key={index} color={item} defaultChecked />)}
            </Preview>
        </div>
    )
}

export default Page;
