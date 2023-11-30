import {Preview} from '../../../Components';
import {ErrorFeedback, FormControl, HelperText, Input, Label} from '../../../Forms';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Basic'>
        <FormControl>
          <Label>First Name</Label>
          <Input/>
        </FormControl>
      </Preview>
      <Preview title='Helper text'>
        <FormControl>
          <Label>Phone Number</Label>
          <Input/>
          <HelperText>
            e.g +212 690-922-699
          </HelperText>
        </FormControl>
      </Preview>
      <Preview title='Validation'>
        <FormControl>
          <Label>Phone Number</Label>
          <Input/>
          <ErrorFeedback>
            This field is required.
          </ErrorFeedback>
        </FormControl>
      </Preview>
    </div>
  );
};

export default Page;