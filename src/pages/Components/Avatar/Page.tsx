import {Avatar, Preview} from "../../../Components";
import {SIZING} from "../../../Components/Avatar/Avatar.types.ts";

const Page = () => {
const shapes=["rounded-none","","rounded-md","rounded-lg","rounded-full"]
const image='\'/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg\''
    return (
        <div className="flex-col space-y-8">
            <Preview title="Default" className="flex items-center justify-center bg-white">
                <Avatar
                    src={image}
                />
            </Preview>
            <Preview title="Placeholder" className="flex items-center justify-center bg-white">
                <Avatar
                    placeholder="MB"
                />
            </Preview>
            <Preview title="Shape" className="flex items-center justify-center bg-white gap-6">
                {shapes.map(shape => (<Avatar
                    src={image}
                    className={shape}
                />))}

            </Preview>
            <Preview title='Sizing' className='bg-white '>
                <div className="flex flex-row gap-12 justify-center ">
                    <div className="flex flex-col gap-5">
                        {SIZING.map(size => (
                            <Avatar className="m-auto" placeholder='mb' key={size} size={size}/>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {SIZING.map(size => (
                            <Avatar className="m-auto" src={image} key={size} size={size}/>
                        ))}
                    </div>
                </div>
            </Preview>
        </div>
    )
}
export default Page

