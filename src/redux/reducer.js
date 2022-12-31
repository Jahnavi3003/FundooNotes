const initialState = {
    layout: true,
    labels: [],

  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGELAYOUT':
        return {
          layout: !state.layout
        };

      case 'GETLABELDATA':
        return {
            labels: [...action.payload]
        };

      default:
        return state;
    }
  };