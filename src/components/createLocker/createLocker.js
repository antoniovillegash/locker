import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Form1 from './createLockerForm1';

const useStyles = theme => ({
    root: {
        width: '80%',
        maxWidth: '30em',
        margin: '0 auto',
        textAlign: 'center'
    },
    title: {
        color: 'var(--color-theme-1)',
        fontWeight: '600',
    },
    
});

class createLocker extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h2 className={classes.title}>Create new locker</h2>
                <Form1/>

            </div>
        );
    }
}

export default withStyles(useStyles)(createLocker);
