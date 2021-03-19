import React from 'react';

interface Props {
	toogleForm: () => void
}

const CircleOne:React.FC<Props> = ({toogleForm}) => {
  return (
    <button className="circle-one" onClick={toogleForm}>
      Form
    </button>
  );
};

export default CircleOne;
