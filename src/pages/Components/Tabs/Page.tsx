import {Preview, Tab, TabPanel, Tabs, TabsList} from "../../../Components";

const Page = () => (
  <div className="flex gap-12 flex-col">
    <Preview title="Default">
      <div className='flex items-center justify-center gap-2'>
        <Tabs defaultValue={1}>
          <TabsList>
            <Tab value={1}>Tab 1</Tab>
            <Tab value={2}>Tab 2</Tab>
            <Tab value={3}>Tab 3</Tab>
          </TabsList>
          <TabPanel value={1}>Tab Content 1</TabPanel>
          <TabPanel value={2}>Tab Content 2</TabPanel>
          <TabPanel value={3}>Tab Content 3</TabPanel>
        </Tabs>
      </div>
    </Preview>
    <Preview title="Vertical">
      <div className='flex items-center justify-center gap-2'>
        <Tabs defaultValue={1} vertical>
          <TabsList>
            <Tab value={1}>Tab 1</Tab>
            <Tab value={2}>Tab 2</Tab>
            <Tab value={3}>Tab 3</Tab>
          </TabsList>
          <TabPanel value={1}>Tab Content 1</TabPanel>
          <TabPanel value={2}>Tab Content 2</TabPanel>
          <TabPanel value={3}>Tab Content 3</TabPanel>
        </Tabs>
      </div>
    </Preview>
    <Preview title="States">
      <div className='flex items-center justify-center gap-2'>
        <Tabs defaultValue={1}>
          <TabsList>
            <Tab value={1}>Tab 1</Tab>
            <Tab value={2} disabled>Disabled</Tab>
            <Tab value={3}>Tab 3</Tab>
          </TabsList>
          <TabPanel value={1}>Tab Content 1</TabPanel>
          <TabPanel value={2}>Tab Content 2</TabPanel>
          <TabPanel value={3}>Tab Content 3</TabPanel>
        </Tabs>
      </div>
    </Preview>
  </div>
)

export default Page;
