import { FormProvider, FormContext } from './FormContext'
import { useContext, useState, useEffect } from 'react';
import { validateInput } from './Validation'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function ChildDetailsComp(props) {

  const [errors, setErrors] = useState({ fname: '', lname: '', identity: '' });
  const [child, setChild] = useState({ fname: '', lname: '', identity: '', childId: props.id });

  const handleEvent = (event) => {
    const error = validateInput(event.target.name, event.target.value);
    if (error) {
      setChild({
        ...child, [event.target.name]: ''
      });
      setErrors(
        {
          ...errors, [event.target.name]: error
        }
      );
    }
    else {
      setChild({
        ...child, [event.target.name]: (event.target.value)
      });
      setErrors(
        {
          ...errors, [event.target.name]: error
        }
      );
    }
  }
  const classes = useStyles();


  useEffect(() => {
    if (child.fname!='' && child.lname!='' &&child.identity!='') {
      props.handleChildEvent(child, props.id);
    }
  }, [child])
  return (<div className={classes.root} autoComplete="off">
    {`Child ${props.id}`}
    <TextField id="standard-basic" name="fname" label="*First Name" type="text" onBlur={handleEvent} />
    {!!errors.fname && (<span>{errors.fname}</span>)}
    <TextField id="standard-basic" name="lname" label="*Last Name" type="text" onBlur={handleEvent} />
    {!!errors.lname && (<span>{errors.lname}</span>)}
    <TextField id="standard-basic" name="identity" label="*Identity" type="text" onBlur={handleEvent} />
    {!!errors.identity && (<span>{errors.identity}</span>)}

  </div>
  );
}