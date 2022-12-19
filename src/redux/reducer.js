const initialState = {
    layout: true,

  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGELAYOUT':
        return {
          layout: !state.layout
        };

      default:
        return state;
    }
  };