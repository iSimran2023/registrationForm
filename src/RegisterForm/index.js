import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// Components
import EducationalInfo from "./EducationalInfo";
import PersonalInfo from "./PersonalInfo";
import AdditionalInfo from "./AdditionalInfo";
import FormComplete from "./FormComplete";
// Material-UI
import { Box, Snackbar, SnackbarContent } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
// Context
import { FormContext } from "./FormContext";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: { padding: theme.spacing(8, 12) },
    [theme.breakpoints.up("sm")]: { padding: theme.spacing(4, 6) }
  },
  center: { textAlign: "center" },
  content: { padding: theme.spacing(3, 0, 3, 5) },
  buttonsContainer: { margin: theme.spacing(2, 0) },
  button: { marginRight: theme.spacing(2) },
  error: { backgroundColor: theme.palette.error.dark },
  message: { display: "flex", alignItems: "center" },
  icon: { marginRight: theme.spacing(1) }
}));

const steps = ["Personal Info", "Educational Info", "Additional Info"];

export default function RegistrationForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [state, setState] = useContext(FormContext);

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);
  const handleCloseSnackbar = () => setOpenError(false);

  const handleSubmit = e => {
    e.preventDefault();
    activeStep < steps.length - 1 ? handleNext() : setCompleted(true);
  };

  const handleError = e => {
    setState({
      ...state,
      errors: { ...state.errors, [e.target.name]: e.target.validationMessage }
    });
    setOpenError(true);
  };

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: value },
      errors: { ...state.errors, [e.target.name]: e.target.validationMessage }
    });
  };

  const getStepContent = step => {
    switch (step) {
      case 0: return <PersonalInfo />;
      case 1: return <EducationalInfo />;
      case 2: return <AdditionalInfo />;
      default: return null;
    }
  };

  return (
    <Fragment>
      {!completed ? (
        <Box className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <form
                    onSubmit={handleSubmit}
                    onInvalid={handleError}
                    onChange={handleChange}
                    className={classes.content}
                  >
                    {getStepContent(activeStep)}
                    <div className={classes.buttonsContainer}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        variant="contained"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                      </Button>
                    </div>
                  </form>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      ) : (
        <Box className={`${classes.root} ${classes.center}`}>
          <FormComplete />
        </Box>
      )}

      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          className={classes.error}
          message={
            <span className={classes.message}>
              <ErrorIcon className={classes.icon} />
              Please correct the form errors
            </span>
          }
        />
      </Snackbar>
    </Fragment>
  );
}