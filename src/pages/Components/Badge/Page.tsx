import {Badge} from "../../../Components/Badge/Badge.tsx";
import {ButtonVariant, ColorVariantEnum, SizeEnum} from "../../../Components/Button/Button.types.tsx";
import {Preview} from "../../../Components";

const Page = () => {

    return (
        <div>
            <div className="flex flex-col gap-12">
                {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
                    <Preview key={variant} title={variant} className="capitalize">
                        <div className="flex justify-center gap-2">
                            {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
                                <Badge
                                    key={variant + color}
                                    variant={variant}
                                    color={color}
                                    className="capitalize"
                                >
                                    {color}
                                </Badge>
                            ))}
                        </div>
                    </Preview>
                ))}
            </div>
            <div>
                <Preview title="Size" className="capitalize">
                    <div className="flex items-center justify-center gap-2">
                        <Badge className="capitalize" size={SizeEnum.Small}>
                            Small
                        </Badge>
                        <Badge className="capitalize">
                            Default
                        </Badge>
                        <Badge className="capitalize" size={SizeEnum.Large}>
                            Large
                        </Badge>
                    </div>
                </Preview>
            </div>
            <div>
                <Preview title="With closing" className="capitalize">
                    <div className="flex items-center justify-center gap-2">
                        <Badge size={SizeEnum.Small} onClose={()=>alert('You clicked on badge\'s closing icon')}>
                            Small
                        </Badge>
                        <Badge onClose={()=>alert('You clicked on badge\'s closing icon')}>
                            Default
                        </Badge>
                        <Badge size={SizeEnum.Large} onClose={()=>alert('You clicked on badge\'s closing icon')}>
                            Large
                        </Badge>
                    </div>
                </Preview>
            </div>
        </div>
    );
};

export default Page;