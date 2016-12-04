const StyleChangeAction = (evt) => {
  return {
    type: 'CHANGE_MAZE_STYLE',
    style: evt
  };
};

export default StyleChangeAction;