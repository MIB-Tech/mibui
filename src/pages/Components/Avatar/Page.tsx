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
          className="rounded-full"
        />
      </Preview>
      <Preview title="Default Sizing" className="flex items-center justify-center bg-white gap-6">
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
      <Preview title="Placeholder Sizing" className="flex items-center justify-center bg-white flex-row gap-6">
        <Avatar
          placeholder="MB"
          size="sm"
        />
        <Avatar
          placeholder="MB"
        />
        <Avatar
          placeholder="MB"
          size="lg"
        />
      </Preview>
    </div>
  )
}
export default Page