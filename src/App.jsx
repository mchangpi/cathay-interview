import './css/style.css';

import Count from './test-react-question/question-5';
import SearchBox from './test-react-question/question-6';
import DateRangePicker from './test-react-question2/DateRangePicker';

function App() {
  return (
    <div className="container">
      <DateRangePicker />
      <footer>
        {/* 
        <p>Interview test for Cathay Bank: question-5</p>
        <Count />
        <hr />
        <p>Interview test for Cathay Bank: question-6</p>
        <SearchBox /> 
      */}
      </footer>
    </div>
  );
}

export default App;
