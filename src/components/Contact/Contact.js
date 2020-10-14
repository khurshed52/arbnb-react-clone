import React, {useState} from 'react';
import {Row} from 'reactstrap';
import {Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import countries from './countries';
import TodoList from './TodoList';
import Counter from './Counter'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
      btn: {
        background: 'linear-gradient(45deg, #17c9bc  30%, #23c5ba  90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        padding: '10px 30px',
        marginTop:'10px',
      },
    },
  }));

const Contact = ()=> {
   const [inputList, setInputList] = useState('');
   const [Items, setItems] = useState([]);

   const itemEvent =(e)=> {
      setInputList(e.target.value)
   };

   const addTodo = ()=> {
    setItems((res)=> {
      return [...res, inputList ];
    });
    setInputList('')
   };

   const deleteItems = ()=> {

  }
  

    React.state = {
        name: '',
        description: '',
        employeType: '',
        contract: '',
        country: ''
      };

      const doSomething = (e)=> {
        e.preventDefault();
        console.log(JSON.stringify(this.state))
    }

    const classes = useStyles();      
    return (
        <div className="container">
           <Row>
                <Col xs="12" sm="6">
                  <Counter/>
                    <input type="text" placeholder="add todo" onChange={itemEvent}/>
                    <button onClick={addTodo}> Add </button>
                    <ul>
                        {Items.map((item, index)=> {
                          return <TodoList 
                            key={index}
                            id={index}
                            name={item}
                            onSelect={deleteItems}
                          />
                        })}
                    </ul>
                </Col>
                <Col xs="12" sm="6">
                <form onSubmit={doSomething} className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={React.state.name} onChange={event => React.setState({name: event.target.value})}
                        />
                         <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            autoWidth
                            >
                                {
                                    countries.map((item, i)=> {
                                        return(
                                        <MenuItem key={i} value={item.value}> {item.value}</MenuItem>  
                                        )
                                    })
                                }
                            </Select>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="Fulltime" control={<Radio />} label="Full Time" />
                                <FormControlLabel value="Halftime" control={<Radio />} label="Half Time" />
                                <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
                            </RadioGroup>
                            <Button variant="contained" color="secondary" type="submit">Submit</Button>
                </form>
                </Col>
           </Row>
        </div>
    )
}

export default Contact
