import React, { Component,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form1 from './createLockerForm1';
// import Slide from '@material-ui/core/Slide';


//const useStyles = makeStyles((theme) => ({
    const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: '40em',
        minWidth:'25em',
        margin: '5em auto',
        textAlign: 'center'
    },
    title: {
        color: 'var(--color-theme-1)',
        fontWeight: '600',
    },

}));

const CreateLocker=()=> {
    const classes = useStyles();
    const [state, setState] = useState(
        {
            showPassword: false,
            fields: {
                input: {
                    lockerName: '',
                    category: [{
                        categoryName: '',
                        secretField: [{
                            title: '',
                            secret: ''
                        }]
                    }]
                },
                errors: {
                    lockerName: null,
                    category: [{
                        categoryName: null,
                        secretField: [{
                            title: null,
                            secret: null
                        }]
                    }]
                }
            }
        }
    );
    
    

        return (
            <div className={classes.root}>
                <h2 className={classes.title}>Create new locker</h2>
                {/* <Slide direction="left" in={true} mountOnEnter unmountOnExit> */}
                    <Form1 state={state} setState={setState}/>
                {/* </Slide> */}

            </div>
        );
    
}

export default CreateLocker;
