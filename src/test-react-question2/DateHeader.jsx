import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';

function DateHeader() {
  return (
    <div className="header">
      <button className="select">&#60;</button>
      <header>
        <span>{format(new Date(), 'PPP', { locale: zhTW }).slice(0, 5)}</span>
        <span>{format(new Date(), 'MMM ', { locale: zhTW })}</span>
      </header>
      <button className="select">&#62;</button>
    </div>
  );
}

export default DateHeader;
