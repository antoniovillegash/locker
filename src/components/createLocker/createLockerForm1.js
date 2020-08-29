import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = theme => ({
    textField: {
        width: '100%',
        margin: '1em auto 0 auto',
    },
    categoryContainer: {
        marginTop:'2em',
        display:'flex',
        flexFlow:'wrap',
        backgroundColor: 'var(--color-theme-3)',
        width: '100%',
        minHeight: '1em',
        paddingBottom:'2em',
    },
    textFieldMedium:{
        width: '90%',
        margin: '2em auto 0 auto',
    },
    textFieldSmall:{
        width: '40%',
        margin: '2em auto 0 auto',
    },

});

class createLocker extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.textField} id="filled-basic" label="Locker name" variant="filled" />
                <div className={classes.categoryContainer}>
                    <TextField className={classes.textFieldMedium} id="filled-basic" label="Category" variant="filled" />
                    <TextField className={classes.textFieldSmall} id="filled-basic" label="Title" variant="filled" />
                    <TextField className={classes.textFieldSmall} id="filled-basic" label="Secret" variant="filled" />

                </div>
            </form>

        );
    }
}

export default withStyles(useStyles)(createLocker);
