import {Card} from '../../../Components/Card/Card.tsx';
import {CardPlaceholder} from './CardPlaceholder.tsx';
import {Preview} from '../../../Components/Preview';

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Basic'>
        <Card
          className='bg-white'
        >
          <CardPlaceholder className='h-48'/>
        </Card>
      </Preview>
      <Preview title='Card with header'>
        <Card
          className='bg-white'
          header={<CardPlaceholder className='h-10'/>}
        >
          <CardPlaceholder className='h-48'/>
        </Card>
      </Preview>
      <Preview title='Card with footer'>
        <Card
          className='bg-white'
          footer={<CardPlaceholder className='h-10'/>}
        >
          <CardPlaceholder className='h-48'/>
        </Card>
      </Preview>
      <Preview title='Card with header and footer'>
        <Card
          className='bg-white'
          header={<CardPlaceholder className='h-10'/>}
          footer={<CardPlaceholder className='h-10'/>}
        >
          <CardPlaceholder className='h-48'/>
        </Card>
      </Preview>
    </div>
  )
}

export default Page