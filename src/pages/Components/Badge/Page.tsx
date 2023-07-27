import {useState} from 'react';
import {BadgeSizeEnum, BadgeVariant, ColorVariantEnum} from "../../../Components/Badge/Badge.types.tsx";
import {Badge} from "../../../Components/Badge/Badge.tsx";

const Page = () => {
    const [size, setSize] = useState<BadgeSizeEnum | undefined>()

    return (
        <div>
            <div className="flex items-center gap-2">
                <div>
                    <Badge
                        size={BadgeSizeEnum.Small}
                        onClick={() => setSize(BadgeSizeEnum.Small)}
                        active={size === BadgeSizeEnum.Small}
                    >
                        Small
                    </Badge>
                </div>
                <div>
                    <Badge
                        onClick={() => setSize(undefined)}
                        active={!size}
                    >
                        Default
                    </Badge>
                </div>
                <div>
                    <Badge
                        size={BadgeSizeEnum.Large}
                        onClick={() => setSize(BadgeSizeEnum.Large)}
                        active={size === BadgeSizeEnum.Large}
                    >
                        Large
                    </Badge>
                </div>

            </div>

            {(Object.values(BadgeVariant) as BadgeVariant[]).map(variant => {

                return (
                    <div key={variant} className="pt-10">
                        <div className="text-2xl capitalize">
                            {variant}
                        </div>
                        <div className="flex gap-2 pt-2">
                            {(Object.values(ColorVariantEnum) as ColorVariantEnum[]).map(color => (
                                <Badge
                                    key={variant + color}
                                    variant={variant}
                                    color={{color: color}}
                                    className="capitalize"
                                    size={size}
                                >
                                    {/*<BellIcon className='header-icon'/>*/}
                                    {color}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )
            })}

            <div className="pt-10">
                <div className="text-2xl capitalize">
                    Badge Set
                </div>
                <div className="inline-flex pt-2" role="group">
                    <Badge
                        className="capitalize bg-danger-900"
                        size={size}
                        round={{
                            end: 'none'
                        }}
                    >
                        Primary
                    </Badge>
                    <Badge
                        className="capitalize"
                        size={size}
                        round={{
                            start: 'none',
                            end: 'none'
                        }}
                    >
                        Success
                    </Badge>
                    <Badge
                        className="capitalize"
                        size={size}
                        round={{
                            start: 'none'
                        }}
                    >
                        Button 3
                    </Badge>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Page