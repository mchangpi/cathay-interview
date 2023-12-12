import { useState } from 'react';
import Count from './test-react-question/question-5';
import SearchBox from './test-react-question/question-6';
import DateRangePicker from './test-react-question2/DateRangePicker';

import './css/style.css';

function App() {
  const [viewTask, setViewTask] = useState(true);

  return (
    <div className="container">
      <DateRangePicker />
      {!viewTask && (
        <div>
          <hr className="line" />
          <p>Interview test for Cathay Bank: Question-5</p>
          <Count />
          <hr className="line" />
          <p>Interview test for Cathay Bank: Question-6</p>
          <SearchBox />
        </div>
      )}
      <footer>
        <button onClick={() => setViewTask((prev) => !prev)}>
          {viewTask ? 'VIEW' : 'HIDE'} Question 5 & 6
        </button>
      </footer>
    </div>
  );
}

export default App;
