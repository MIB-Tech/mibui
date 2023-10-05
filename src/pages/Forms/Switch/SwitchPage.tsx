import { COLORS } from "../../../@types/Color";
import { Preview } from "../../../Components";
import { Switch } from "../../../Components/Switch";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex justify-center">
                <Switch />
            </Preview>
            <Preview title="Disabled State" className="flex justify-center">
                <Switch disabled />
            </Preview>
            <Preview title="Sizing" className="grid grid-cols-3 items-center justify-items-center">
                <Switch size="sm" />
                <Switch />
                <Switch size="lg" />
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center">
                {COLORS.map((item, index) => <Switch key={index} color={item} />)}
            </Preview>
        </div>
    )
}

export default Page;
