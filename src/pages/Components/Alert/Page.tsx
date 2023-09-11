import {Alert} from "../../../Components/Alert/Alert.tsx";
import {ButtonVariant, ColorVariantEnum} from "../../../Components/Button/Button.types.tsx";
import {Preview} from "../../../Components";
import {CheckIcon} from "@heroicons/react/20/solid";


const Page = () => {

    return (<>
        <div className="flex flex-col gap-9 capitalize">

            {(Object.values(ButtonVariant) as ButtonVariant[]).map(variant => (
                <Preview key={variant} title={variant}>
                    <div className="flex flex-col gap-2">
                        {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (<Alert
                                key={variant + color}
                                variant={variant}
                                color={color}
                                title={color}
                                icon={<CheckIcon className='h-5 w-5 mt-1'/>}
                            >
                                <p>le contenu de l'alerte.</p>
                            </Alert>

                        ))}
                    </div>
                </Preview>))
            }
            <Preview title={"title & icon"}>
                <div className="flex flex-col gap-2">
                    <Alert
                        color={ColorVariantEnum.Primary}
                        icon={<CheckIcon className='h-5 w-5 mt-1'/>}
                        title={"Title & icon"}
                        variant={ButtonVariant.Solid}
                    />
                    <Alert
                        color={ColorVariantEnum.Primary}
                        icon={<CheckIcon className='h-5 w-5 mt-1'/>}
                        title={"Title & icon"}
                        variant={ButtonVariant.Soft}
                    />

                    <Alert
                        color={ColorVariantEnum.Primary}
                        icon={<CheckIcon className='h-5 w-5 mt-1'/>}
                        title={"title & icon"}
                        variant={ButtonVariant.Clean}
                    />
                </div>
            </Preview>
            <Preview title={"title only"}>
                <div className="flex flex-col gap-2">
                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Title Only"}
                        variant={ButtonVariant.Solid}
                    />
                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Title nly"}
                        variant={ButtonVariant.Soft}
                    />

                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Title Only"}
                        variant={ButtonVariant.Clean}
                    />
                </div>
            </Preview>
            <Preview title={"dismiss button"}>
                <div className="flex flex-col gap-2">
                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Dismiss Button"}
                        variant={ButtonVariant.Solid}
                        dismissible

                    />
                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Dismiss Button"}
                        variant={ButtonVariant.Soft}
                        dismissible
                    />

                    <Alert
                        color={ColorVariantEnum.Primary}
                        title={"Dismiss Button"}
                        variant={ButtonVariant.Clean}
                        dismissible

                    />
                </div>
            </Preview>
        </div>
    </>)
}

export default Page