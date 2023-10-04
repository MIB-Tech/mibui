// import { COLORS } from "../../../@types/Color";
import { Preview } from "../../../Components";
import { Switch } from "../../../Components/Switch";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex justify-center">
                <Switch />
            </Preview>
            <Preview title="Disabled State" className="flex justify-center">
            </Preview>
            <Preview title="Sizing" className="grid grid-cols-3 items-center justify-items-center">
            </Preview>
            <Preview title="Colors" className="grid grid-cols-3 gap-6 justify-items-center">
            </Preview>
        </div>
    )
}

export default Page;
