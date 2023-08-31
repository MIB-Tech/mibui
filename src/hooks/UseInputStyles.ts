import {twMerge} from 'tailwind-merge';

export const useInputStyles = () => {
  const unstyled = twMerge(
    'focus:outline-none bg-white w-full',
    '[&.Mui-disabled]:opacity-80 [&.Mui-disabled]:ring-gray-300 [&.Mui-disabled]:cursor-not-allowed'
  )

  return {
    unstyled,
    className: twMerge(
      unstyled,
      'rounded text-gray-900 ring-1 ring-inset ring-gray-300',
      '[&.Mui-error]:!ring-danger-600',
      '[&.Mui-focused]:ring-2 [&.Mui-focused]:ring-primary-600',
      'hover:ring-primary-600',
    )
  };
};

// flex MuiInput-root Mui-error focus:outline-none bg-white [&.Mui-disabled]:opacity-80 rounded w-full text-gray-900 ring-1 ring-inset ring-gray-300 [&.Mui-focused]:ring-2 [&.Mui-focused]:ring-inset [&.Mui-focused]:ring-primary-600 [&.Mui-error]:ring-2 [&.Mui-error]:ring-inset [&.Mui-error]:ring-danger-600 px-[10px] py-[6px]