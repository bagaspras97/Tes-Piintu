import React from 'react';

interface Props {
	name: string;
	email: string;
}

const CircleThree:React.FC<Props> = ({ name, email }) => {
  return (
    <div className="circle-three">
      {name || email ? (
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default CircleThree;
