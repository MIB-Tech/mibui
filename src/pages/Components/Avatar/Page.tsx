import {Avatar, Preview} from "../../../Components";

const Page = () => {
  return (
    <div className="flex-col gap-8">
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
          className="rounded-full"
        />
      </Preview>
      <Preview title="Size" className="flex items-center justify-center bg-white gap-6">
        <Avatar
          src="https://www.w3schools.com/images/picture.jpg"
          size="sm"
        />
        <Avatar
          src="https://www.w3schools.com/images/picture.jpg"
        />
        <Avatar
          src="https://www.w3schools.com/images/picture.jpg"
          size="lg"
        />
      </Preview>
    </div>
  )
}
export default Page