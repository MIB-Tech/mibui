import { useState } from 'react';
import Icon from './icon';
import { items } from './items';

const Accordion = () => {


  const [openStates, setOpenStates] = useState<boolean[]>(new Array(items.length).fill(false));


  const toggle = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} >
          <h2 onClick={() => toggle(index)}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium outline-none text-gray-500 border border-b-0 border-gray-200   hover:transition duration-300   dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            >
              <span>{item.title}</span>
              <Icon />
              
            </button>
          </h2>
          {openStates[index] && (
            <div className="transition ease-in-out duration-300">
              <div className="p-5 border border-b-1 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
