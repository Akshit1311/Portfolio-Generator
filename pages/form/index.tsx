import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper, InputAdornment} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';

const sleep = () => new Promise((acc) => setTimeout(acc, 3000));

export default function Index() {
  const[design,setDesign]=useState(1);
  
  const designChange=(value:any)=>{
        setDesign((design)=>value);
        console.log(value,design);
    }

  return (
    <div style={{display:'flex', justifyContent:'center', background:'#dddfff', width:'-webit-fill-available' , height:'100vh',alignItems:'center'}}>
    <Card style={{display:'flex', justifyContent:'center'}}>
      <CardContent>
        <FormikStepper
          initialValues={{
            firstName:'',
            lastName: '',
            social:{
              'email':'',
              'linkedin':'',
              'github':'',
              'twitter':'',
              'instagram':'',
            },
            skills:['','','','','','','',''],
            githubToken:'',
            resume:'',
            roles:['','',''],
            description: '',
            design:''
          }}
          onSubmit={async (values) => {
            await sleep();
            console.log('values', values);
          }}
        >
          <FormikStep label="Personal Data">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="firstName" component={TextField} label="First Name" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="lastName" component={TextField} label="Last Name" />
            </Box>
          </FormikStep>

          <FormikStep label="Roles">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="roles[0]" component={TextField} label="Role 1" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="roles[1]" component={TextField} label="Role 2" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="roles[2]" component={TextField} label="Role 3" />
            </Box>
          </FormikStep>

          <FormikStep label="Socials">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required  type="email" name="social.email" component={TextField} label="E-Mail" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required type="url" name="social.linkedin" component={TextField} label="LinkedIn" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.github" type="url" component={TextField} label="GitHub (Optional)" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.twitter" type="url" component={TextField} label="Twitter (Optional)" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.instagram" type="url" component={TextField} label="Instagram (Optional)" />
            </Box>
          </FormikStep>

          <FormikStep label="Skills">
              <Grid container spacing={2} style={{width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth  required name="skills[0]" component={TextField} label="Skill 1" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth  required name="skills[1]" component={TextField} label="Skill 2" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth  required name="skills[2]" component={TextField} label="Skill 3" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth  required name="skills[3]" component={TextField} label="Skill 4" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth name="skills[4]" component={TextField} label="Skill 5" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth name="skills[5]" component={TextField} label="Skill 6" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth name="skills[6]" component={TextField} label="Skill 7" />
                  </Box>
                 </Grid>
                 <Grid item>
                  <Box style={{paddingBottom:'1rem'}}>
                    <Field fullWidth name="skills[7]" component={TextField} label="Skill 8" />
                  </Box>
                 </Grid>
              </Grid>
          </FormikStep>

          <FormikStep label="Projects & Resume">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="githubToken" component={TextField} label="Github Token" helperText="Copy Paste Your Github Access Token to render recent projects."/>
            </Box>

            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="resume" type="url" component={TextField} label="Resume Link" helperText="A drive link to the resume that is visible to all."/>
            </Box>
          </FormikStep>

          
          {/* <FormikStep label="More Info">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep> */}

          <FormikStep label="design">
            <div role="group">
              <div>
                <div style={{width:'-webkit-fill-available',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center',padding:"0.5rem 0"}}>
                <DesignPicker preview="https://www.google.com" title="Design1"/>
                <Field style={{flex:'0.1',paddingLeft:'3rem'}} type="radio" name="design" value="Option1"/>
                </div>
                <div style={{width:'-webkit-fill-available',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center',padding:"0.5rem 0"}}>
                <DesignPicker preview="https://www.google.com" title="Design2"/>
                <Field style={{flex:'0.1', paddingLeft:'3rem'}} type="radio" name="design" value="Option2"/>
                </div>
                <div style={{width:'-webkit-fill-available',display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center',padding:"0.5rem 0"}}>
                <DesignPicker preview="https://www.google.com" title="Design3"/>
                <Field style={{flex:'0.1', paddingLeft:'3rem'}} type="radio" name="design" value="Option3"/>
                </div>
              </div>
            </div>
          </FormikStep>

        </FormikStepper>
      </CardContent>
    </Card>
    </div>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2} style={{paddingTop:'2rem'}}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

function DesignPicker({...props}){
  return(
    <>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',flexDirection:'row',flexWrap:'wrap',paddingRight:'3rem'}}>
        <div style={{paddingRight:"0.7rem"}}>{props.title}</div>
              <a href={props.preview} target="_blank" rel="noreferrer" >
                <Button
                  variant="contained"
                  color="primary"
                  >
                      Preview
                </Button>
              </a>
      </div>
    </>
  );
}