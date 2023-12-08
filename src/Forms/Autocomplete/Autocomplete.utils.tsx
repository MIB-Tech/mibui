export const defaultGetOptionLabel = <Value, >(option: Value) => {
  switch (typeof option) {
    case 'boolean':
      return option ? 'True' : 'False';
    case 'number':
      return option.toString();
    case 'string':
      return option;
    default:
      return 'No label';
  }
};