import {Modal} from '../../../../Components';
import {GenerateViewProps} from './GenerateView.types.ts';

const GenerateView = ({
                        className,
                        onClose,
                        ...props
                      }: GenerateViewProps
) => {

  return (
    <Modal
      {...props}
      size='fullscreen'
    >
      TODO
    </Modal>
  );
};

export default GenerateView;