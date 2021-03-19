import React, { useState} from 'react';
import CircleOne from './components/Circle/CircleOne';
import CircleThree from './components/Circle/CircleThree';
import CircleTwo from './components/Circle/CircleTwo';
import FormData from './components/FormData';
import Header from './components/Header';
import Line from './components/Line';


const App:React.FC = () => {
  const [name, setName] = useState<string> ('');
  const [email, setEmail] = useState<string> ('')
  const [showData, setShowData] = useState<boolean>(false);

  const toogleForm = () => {
    setShowData(!showData);
  };
  return (
    <div className="App">
      <Header />
      <div className="circle">
        <CircleOne toogleForm={toogleForm} />
        <Line />
        <CircleTwo />
        <Line />
        <CircleThree name={name} email={email} />
      </div>
      <FormData name={name} setName={setName}  email={email} setEmail={setEmail} showData={showData} />
    </div>
  );
}

export default App;

