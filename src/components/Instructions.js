import { FormProvider, FormContext } from './FormContext'
import { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import './Styles.css'

const InstructionsComp = () => {

  const { userDataPro } = useContext(FormContext);
  const [userData] = userDataPro;

  return (<div>
    <h4>SOME IMPORTANT INSTRUCTION BEFORE GET STARTED...</h4>
    Welcome <span>{userData.fname  ? `${userData.fname} ${userData.lname}!`: 'guest!' }</span> <br/>
    Please note a number of important comments regarding the completion of the form.<br/>
    All fields specified in * are required.<br/> Valid and correct data must be entered.<br/>
     Submission of the form will only be possible by filling in all the required fields with proper input.<br/>
    The information will be stored securely, and will not be used without express consent.
    <br/>
    <br/>
    To fill the form, click <Link to="details">here</Link>
  </div>
  );
}
export default InstructionsComp;
