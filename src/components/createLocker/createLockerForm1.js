import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EyeOff from '../../assets/img/eye-closed.svg';
import Eye from '../../assets/img/eye-open.svg';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    textField: {
        width: '100%',
        margin: '1em auto 0 auto',
    },
    categoryContainer: {
        marginTop: '2em',
        display: 'flex',
        flexFlow: 'wrap',
        backgroundColor: 'var(--color-theme-3)',
        width: '100%',
        minHeight: '1em',
        paddingBottom: '2em',
    },
    textFieldMedium: {
        width: '90%',
        margin: '2em auto 0 auto',
    },
    textFieldSmall: {
        width: '40%',
        margin: '2em auto 0 auto',
    },
    iconButton:{
        width:'1em',
        marginRight:'0',
        padding:'0',
    }

});

class createLocker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    }
    handleClickShowPassword() {
        let showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword
        })
    }
    render() {
        const {showPassword} = this.state;
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.textField} id="filled-basic" label="Locker name" variant="filled" />
                <div className={classes.categoryContainer}>
                    <TextField className={classes.textFieldMedium} id="filled-basic" label="Category" variant="filled" />
                    <TextField className={classes.textFieldSmall} id="filled-basic" label="Title" variant="filled" />
                    <FormControl variant="filled" className={classes.textFieldSmall}>
                            <InputLabel htmlFor="filled-adornment-password">Secret</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                onChange={this.handleChangeField}
                                helpertext=""
                                
                                error=""
                                id="password"
                                variant="filled"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        className={classes.iconButton}
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {showPassword ?
                                                <img src={Eye} alt="ver contraseña" />
                                                :
                                                <img src={EyeOff} alt="ocultar contraseña" />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={86} />
                            <Typography variant="caption" >
                                error
                            </Typography>
                        </FormControl>

                </div>
            </form>

        );
    }
}

export default withStyles(useStyles)(createLocker);
