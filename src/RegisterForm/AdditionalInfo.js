import React, { useState } from 'react';
import { Checkbox, Typography, TextField } from '@material-ui/core';

export default function HowYouHeardForm() {
  const [options, setOptions] = useState({
    studentCollegeFamily: false,
    friends: false,
    relative: false,
    websites: false,
    others: false
  });
  const [otherText, setOtherText] = useState('');

  const handleCheckboxChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.checked
    });
  };

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        How did you hear about us?
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            name="studentFamily"
            checked={options.studentFamily}
            onChange={handleCheckboxChange}
          />
          Student, College or family
        </label>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            name="friends"
            checked={options.friends}
            onChange={handleCheckboxChange}
          />
          Friends or Acquaintances
        </label>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            name="relative"
            checked={options.relative}
            onChange={handleCheckboxChange}
          />
          Relative
        </label>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            name="websites"
            checked={options.websites}
            onChange={handleCheckboxChange}
          />
          Websites
        </label>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            name="others"
            checked={options.others}
            onChange={handleCheckboxChange}
          />
          Others
        </label>
      </div>

      {options.others && (
        <TextField
          label="Please specify"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          style={{ marginTop: '16px', width: '100%' }}
        />
      )}
    </div>
  );
}