import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AlwaysOpenDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline // This makes the date picker always visible
      />
    </div>
  );
}

export default AlwaysOpenDatePicker;
