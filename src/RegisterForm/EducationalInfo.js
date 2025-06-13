import React from "react";
import {Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, Divider} from "@material-ui/core";

export default function AcademicBackground() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        Academic Background
      </Typography>

      {/* Degree Level Selection */}
      <FormControl component="fieldset" style={{ marginBottom: 20 }}>
        <FormLabel component="legend">What are you applying for?</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="bachelors" control={<Radio />} label="Bachelors" />
          <FormControlLabel value="masters" control={<Radio />} label="Masters" />
        </RadioGroup>
      </FormControl>

      <Divider style={{ margin: "20px 0" }} />

      {/* Education Details */}
      <Typography variant="subtitle1" gutterBottom>
        Level
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="School/College"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Board/University"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Completion Year"
            variant="outlined"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Grade/GPA"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider style={{ margin: "20px 0" }} />

      {/* SEE/Equivalent Section */}
      <Typography variant="subtitle1" gutterBottom>
        SEE or Equivalent *
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        10 + 2 or Equivalent *
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Completion Year"
            variant="outlined"
            type="number"
            fullWidth
            defaultValue="2000"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Completion Year"
            variant="outlined"
            type="number"
            fullWidth
            defaultValue="2000"
          />
        </Grid>
      </Grid>

      <Divider style={{ margin: "20px 0" }} />

      {/* Program Choice */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Program Choice*</FormLabel>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BE Civil" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BE IT" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BE Computer" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BE Software" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BCA" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BBA" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="B. Architecture" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel control={<Checkbox />} label="BE Electronics and Communication" />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}