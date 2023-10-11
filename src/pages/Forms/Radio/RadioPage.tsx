import { Preview } from "../../../Components";
import Radio from "../../../Components/Radio/Radio";

const Page = () => {
    return(
        <div className="flex flex-col gap-12">
            <Preview title="Default" className="flex justify-center">
                <Radio />
            </Preview>
        </div>
    )
}

export default Page;
