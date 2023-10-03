import {Preview, Tab, TabPanel, Tabs, TabsList} from "../../../Components";

const Page = () => (
  <>
    <Preview title="Default">
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
    </Preview>
    <Preview title="Vertical">
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
    </Preview>
  </>
)

export default Page;
