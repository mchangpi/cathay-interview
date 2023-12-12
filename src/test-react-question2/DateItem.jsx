function DateItem({ date, handleClick, buttonClass }) {
  return (
    <div className={buttonClass?.includes('non') ? 'not-allowed' : ''}>
      <button
        onClick={() => handleClick(date.monthday)}
        className={`date ${buttonClass}`}
      >
        {date.monthday.toString().padStart(2, ' ')}日
        <sup className="weekday">
          {['日', '六'].includes(date.weekday) && date.weekday}
        </sup>
      </button>
    </div>
  );
}

export default DateItem;
