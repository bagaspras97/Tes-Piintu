import React from 'react';

interface Props {
	name: string;
	email: string;
	setName: (name: string) => void;
	setEmail: (email: string) => void
	showData: boolean;
  }

const FormData: React.FC<Props> =  ({name, email, setName, setEmail, showData}) => {
  return (
    <div className="form-data">
      {showData && (
        <form>
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} className="input-name"></input>
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="text"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} className="input-email"></input>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormData;
