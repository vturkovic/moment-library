import { useState } from 'react';
import moment from 'moment';
import './App.css';

const App = () => {

  const [date, setDate] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formatedDate = moment(new Date(event.target.elements.date.value)).format('MMMM Do YYYY, h:mm:ss a');
    setDate(formatedDate);
    alert(JSON.stringify(formatedDate, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name" />
      </div>
      <div>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname" />
        </div>
        <div>
          <input
            type="date"
            id="date"
            name="date" 
            min="2020-01-01" max="2024-01-01" />
        </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
