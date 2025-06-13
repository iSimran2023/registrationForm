import React, { useContext } from "react";
import { TextField, Grid, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import { FormContext } from "./FormContext";

export default function PersonalInfo() {
  const [state, setState] = useContext(FormContext);
  const user = state?.user || {}; // Ensures user exists
  const errors = state?.errors || {}; // Ensures errors exist
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };

  return (
    <Grid container spacing={2}>
      {/* Fullname Field */}
      <Grid item xs={12} md={4}>
        <TextField
          placeholder="Type your fullname here"
          name="fullname"
          label="Fullname"
          value={user.fullname}
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          required
          inputProps={{ minLength: 3, maxLength: 20 }}
          error={!!errors["fullname"]}
          fullWidth
        />
      </Grid>

      {/* Phone Number Field */}
      <Grid item xs={12} md={4}>
        <TextField
          placeholder="Type your phone number here"
          name="number"
          label="Number"
          value={user.number}
          type="tel"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          error={!!errors["number"]}
          required
          fullWidth
        />
      </Grid>

      {/* Email Field */}
      <Grid item xs={12} md={4}>
        <TextField
          placeholder="Type your email here"
          name="email"
          label="Email"
          value={user.email}
          type="email"
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          error={!!errors["email"]}
          required
          fullWidth
        />
      </Grid>

      {/* Address Field */}
      <Grid item xs={12} md={4}>
        <TextField
          placeholder="Type your address here"
          name="address"
          label="Address"
          value={user.address}
          onChange={handleInputChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          error={!!errors["address"]}
          required
          fullWidth
        />
      </Grid>

      {/* Birth Date Field */}
      <Grid item xs={12} md={4}>
        <TextField
          type="date"
          name="birthdate"
          label="Birthdate"
          value={user.birthdate}
          onChange={handleInputChange}
          helperText="You need to be at least 18 years old"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          inputProps={{
            min: "1900-01-01",
            max: dateLimit.toISOString().slice(0, 10),
          }}
          error={!!errors["birthdate"]}
          required
          fullWidth
        />
      </Grid>

      {/* Gender Field */}
      <Grid item xs={12} md={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row name="gender" value={user.gender || ""} onChange={handleInputChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}