import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Form1 from './createLockerForm1';
import Slide from '@material-ui/core/Slide';

const useStyles = theme => ({
    root: {
        width: '80%',
        maxWidth: '40em',
        margin: '5em auto',
        textAlign: 'center'
    },
    title: {
        color: 'var(--color-theme-1)',
        fontWeight: '600',
    },

});

class createLocker extends Component {
    
    handleEvent() {
        console.log(this.props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h2 className={classes.title}>Create new locker</h2>
                <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                    <Form1 />
                </Slide>

            </div>
        );
    }
}

export default withStyles(useStyles)(createLocker);
