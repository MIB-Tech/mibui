import {Preview, Tooltip} from '../../../Components';
import {TooltipPlacement} from '../../../Components/Tooltip/Tooltip.types.tsx';
const Page = () => {
    return (
        <div>
            <>
                <Preview title='Placement'>
                    {(Object.values(TooltipPlacement) as TooltipPlacement[]).map(placement => (
                        <div className='flex justify-center'>
                            <Tooltip placement={placement} content='this is a tooltip' color="primary" variant="solid">
                                {placement}
                            </Tooltip>
                        </div>
                    ))}
                </Preview>
            </>
        </div>
    )
}

export default Page