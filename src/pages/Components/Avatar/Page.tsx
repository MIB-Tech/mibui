import {Avatar, Preview} from "../../../Components";

const Page = () => {
    return (
        <div className="flex-col space-y-8">
            <Preview title="Default" className="flex items-center justify-center bg-white">
                <Avatar
                    src="https://www.w3schools.com/images/picture.jpg"
                />
            </Preview>
            <Preview title="Placeholder" className="flex items-center justify-center bg-white">
                <Avatar
                    placeholder="MB"
                />
            </Preview>
            <Preview title="Shape" className="flex items-center justify-center bg-white gap-6">
                <Avatar
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="rounded-none"
                />
                <Avatar
                    src="https://www.w3schools.com/images/picture.jpg"
                />
                <Avatar
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="rounded-md"
                /><Avatar
                src="https://www.w3schools.com/images/picture.jpg"
                className="rounded-lg"
            />
                <Avatar
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="rounded-full"
                />
            </Preview>
            <Preview title='Sizing' className='bg-white'>
                <Avatar
                    placeholder='MB'
                    size={"xs"}
                />
                <Avatar
                    placeholder='MB'
                    size={"sm"}
                />
                <Avatar
                    placeholder='MB'
                    size={"md"}
                />
                <Avatar
                    placeholder='MB'
                    size={"lg"}
                />
                <Avatar
                    placeholder='MB'
                    size={"xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"2xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"3xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"4xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"5xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"6xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"7xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"8xl"}
                />
                <Avatar
                    placeholder='MB'
                    size={"9xl"}
                />
            </Preview>
        </div>
    )
}
export default Page

