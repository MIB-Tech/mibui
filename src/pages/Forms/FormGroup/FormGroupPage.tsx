import {Preview} from '../../../Components';
import {ErrorFeedback, FormGroup, HelperText, Input, Label} from '../../../Forms';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Basic'>
        <FormGroup>
          <Label>First Name</Label>
          <Input/>
        </FormGroup>
      </Preview>
      <Preview title='Helper text'>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input/>
          <HelperText>
            e.g +212 690-922-699
          </HelperText>
        </FormGroup>
      </Preview>
      <Preview title='Validation'>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input/>
          <ErrorFeedback>
            This field is required.
          </ErrorFeedback>
        </FormGroup>
      </Preview>
    </div>
  );
};

export default Page;