import {Preview} from "../../../Components";
import {Popover} from "../../../Components/Popover/Popover.tsx";

const Page = () => {

    const directions = ['bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end', 'top', 'top-start', 'top-end'];

    return (
        <>
            <div className="flex flex-col gap-12">
                <Preview title="Default">
                    <div className="flex justify-center">
                        <Popover
                            trigger={"mouseenter"}
                            Content={"Popup content"}
                            Title={"Default Popup"}
                        />
                    </div>
                </Preview>
            </div>
            <div className="flex flex-col gap-12">
                <Preview title="direction">
                    <div className="flex flex-col gap-12">
                        {directions.map(placement => (
                            <Popover
                                key={placement}
                                placement={placement}
                                trigger={"mouseenter"}
                                Title={placement}
                                Content={"Popup content"}
                            />

                        ))}
                    </div>
                </Preview>
            </div>
        </>
    );
}

export default Page;
