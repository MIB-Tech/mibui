import React from 'react';
import {Preview} from '../../../Components';
import {ModalExample} from "./ModalExample.tsx";
import {SizeEnum} from "../../../Components/Button/Button.types.tsx";

const Page: React.FC = () => {


    return (
        <div className="flex flex-col gap-12">
            <Preview title={'Default '} className="capitalize">
                <ModalExample/>
            </Preview>
            <Preview title={'Sizes'} className="capitalize">
                <div className="flex items-center justify-center gap-2">
                    <ModalExample
                        buttonLabel='Small'
                        size={SizeEnum.Small}
                    />
                    <ModalExample />
                    <ModalExample
                        buttonLabel='Large'
                        size={SizeEnum.Large}
                    />
                </div>
            </Preview>
        </div>
    );
};

export default Page;
