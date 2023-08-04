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
                        buttonLabel={'Default Modal'}
                        size={SizeEnum.Small}
                    />
                    <ModalExample  buttonLabel={'Small Modal'}/>
                    <ModalExample
                        buttonLabel={'Large Modal'}
                        size={SizeEnum.Large}
                    />
                </div>
            </Preview>
        </div>
    );
};

export default Page;
