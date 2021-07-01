import { FormProvider, FormContext } from './FormContext'
import { Children, useContext, useEffect, useState } from 'react';
import { validateForm, validateInput } from './Validation'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ChildDetailsComp from './ChildInputs'
import './Styles.css';
import postData from '../utils/utilsUsers'
import ExportReactCSV from './ExportToExcel/ExportReactCSV';
import { ExportCSV } from './ExportToExcel/ExportExcel';

const PersonalDetailsComp = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  //gloabal state, by useContex hook
  const { errorsMsgPro, userDataPro, childrenPro } = useContext(FormContext);
  const [userData, setUserData] = userDataPro;
  const [errorsMsg, setErrorsMsg] = errorsMsgPro;
  const [children, setChildren] = childrenPro;
  //an array its length is number of children
  const [childrenRender, setChildrenRender] = useState([]);
  const [childrenNum, setChildrenNum] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const classes = useStyles();

  //a function to handle child's event 
  const handleChildEvent = (child, ifInit) => {

    let ifChild = children.filter(ch => ch.identity == child.identity)[0];
    if (ifChild) {
      //if child exist in children state array- update it
        //UPDATE if child
        let childrenCopy = children.filter(ch => ch.identity != child.identity);
        setChildren(childrenCopy.concat(child));
    }
    else {
      //else if child does not exist in state array, we need ADD it to array
      setChildren(prevChildren => [...prevChildren, child]);
    }
    console.log(children)
  }

  //a funcftion to handle input's changes
  const handleEvent = (event) => {
    const error = validateInput(event.target.name, event.target.value);
    if (error) {
      setErrorsMsg({ ...errorsMsg, [event.target.name]: error });
      setUserData({ ...userData, [event.target.name]: ('') });
    }
    else {
      setUserData({ ...userData, [event.target.name]: (event.target.value) });
      setErrorsMsg({ ...errorsMsg, [event.target.name]: error });
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const x = Object.entries(userData).map(([name, info]) => validateInput(name, info) ? false : true);
    if (x.includes(false)) {
      setIsFormValid(false);
      setErrorsMsg({ ...errorsMsg, ["submit"]: 'Fill all the fields!!!' })
    }
    else { 
      
      let user = {
      'Id': userData.identity,
      'FirstName': userData.fname,
      'LatName': userData.lname,
      'IdentityUser': userData.identity,
      'Gendor': userData.Gendor,
      'HMO': userData.HMO,
      'NumChildren': childrenNum,
      'BornDate': userData.bornDate
    };
    //send user data to server
    let resp= await postData(user);
    
    /*
    TODO: postChildren(children)
    */

  }
}

//only if children number was changed, the function will update num of child's component
  useEffect(() => {
    var temp = Array(0);
    for (let i = 0; i < childrenNum; i++) {
      temp.push(i);
    }
    setChildrenRender(temp);
    console.log("useEffect");
  }, [childrenNum])


  return (<div>

    <form onSubmit={onSubmit} className={classes.root} autoComplete="off" >

      <h3>Personal Details</h3>
      <p>Notice:</p>
      <p>Text fields which marked as * are required</p><br />

      <TextField id="standard-basic" name="fname" label="*First Name" type="text" defaultValue={userData.fname || ''} onBlur={handleEvent} /><br />
      {!!errorsMsg.fname && (<span>{errorsMsg.fname}</span>)}
      <br /><br />

      <TextField id="standard-basic" name="lname" label="*Last Name" type="text" defaultValue={userData.lname || ''} onBlur={handleEvent} /><br />
      {!!errorsMsg.lname && (<span>{errorsMsg.lname}</span>)}
      <br /><br />

      <TextField id="standard-basic" name="identity" label="*Identity" type="text" defaultValue={userData.identity || ''} onBlur={handleEvent} /><br />
      {!!errorsMsg.identity && (<span>{errorsMsg.identity}</span>)}
      <br /><br />

      <TextField id="date" type="date" name="bornDate" label="*Birthday" defaultValue={"2000-01-01"} onBlur={handleEvent} /><br />
      {!!errorsMsg.bornDate && (<span>{errorsMsg.bornDate}</span>)}
      <br />

      <TextField id="standard-badic" type="text" name="HMO" label="*HMO" defaultValue={userData.HMO} onBlur={handleEvent} /><br />
      {!!errorsMsg.HMO && (<span>{errorsMsg.HMO}</span>)}
      <br />

      <TextField id="standard-basic" name="childrenNum" label="*Children Number" type="number" defaultValue={userData.childrenNum || ''} onChange={/*handleEvent*/ (e) => { handleEvent(e); setChildrenNum(e.target.value); }} /><br />
      {!!errorsMsg.childrenNum && (<span>{errorsMsg.childrenNum}</span>)}
      <br /><br />

      <label>Gender</label><br />
      <input type="radio" name="gender" id="option1" value="male"  onChange={handleEvent} /> Male
      <input type="radio" name="gender" id="option2" value="female" onChange={handleEvent} /> Female  <br /><br />
      <h3>Children Details</h3>

      {
        childrenRender.map((item, index) => { return <div key={index}><ChildDetailsComp key={index} id={index} handleChildEvent={(child) => { handleChildEvent(child) }} /><br /></div> })
      }

      <input className="styledButton" type="submit" value="Send Form" disabled={false/*isValid ? false : true*/} />
      {!!errorsMsg.submit && (<span>{errorsMsg.submit}</span>)}
    </form>
    <ExportCSV csvData={Object.entries(userData)} fileName={'exportedCSV'}/>
    </div>
  );
}
export default PersonalDetailsComp;