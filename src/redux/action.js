export const changeLayout = () => {
    return {
      type: 'CHANGELAYOUT',
    };
  };

export const getLabelData = (labels) => {
    return {
      type: 'GETLABELDATA',
      payload: labels
    };
};