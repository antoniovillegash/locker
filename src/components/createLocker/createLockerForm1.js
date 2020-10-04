import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EyeOff from '../../assets/img/eye-closed.svg';
import Eye from '../../assets/img/eye-open.svg';
import addRed from '../../assets/img/add-red.svg';
import trash from '../../assets/img/trash.svg';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        margin: '1em auto 2em auto',
    },
    categoryContainer: {
        display: 'flex',
        flexFlow: 'wrap',
        backgroundColor: 'var(--color-theme-3)',
        width: '100%',
        minHeight: '1em',
        paddingBottom: '2em',
        marginBottom: '2em'
    },
    rowContainer: {
        display: 'flex',
        width: '90%',
        margin: '2em auto 0 auto',
    },
    endRowButton: {
        width: '10%',
    },
    endRowButtonImage: {
        width: '1em',
        height: 'auto',
        transform: 'rotate(45deg)'
    },
    endRowButtonImageNoRotate: {
        width: '1em',
        height: 'auto',
    },
    textFieldMedium: {
        width: '100%',

    },
    textFieldSmall: {
        width: '100%',
        margin: '0 auto 0 auto',
    },
    iconButton: {
        width: '1em',
        marginRight: '0',
        padding: '0',
    },
    addFieldButton: {
        width: '50%',
        margin: ' 0 auto',
        backgroundColor: 'var(--color-theme-6)',
        '&:hover': {
            backgroundColor: 'var(--color-theme-2)',
        },
    },
    addCategoryButton: {
        width: '50%',
        margin: ' 0 auto',
        backgroundColor: 'var(--color-theme-3)',
        '&:hover': {
            backgroundColor: 'var(--color-theme-6)',
        },
    },
    nextButtonContainer: {
        width: '100%',
        margin: '2em auto'
    },
    nextButton: {
        display: 'block',
        width: '20%',
        marginLeft: 'auto'
    }

}));

const CreateLocker = ({ state, setState }) => {
    const classes = useStyles();





    const showHidePasword = () => {

        setState(!state.showPassword);
    }


    const addSecretField = (categoryIndex) => {
        setState(state => {
            let fields = state.fields;

            fields.input.category[categoryIndex].secretField.push({ 'title': '', 'secret': '' });
            fields.errors.category[categoryIndex].secretField.push({ 'title': null, 'secret': null });

            return { fields };

        })



    }

    const removeSecretField = (categoryIndex, secretFieldIndex) => {

        setState(state => {
            const fields = state.fields;
            fields.input.category[categoryIndex].secretField = state.fields.input.category[categoryIndex].secretField.filter((item, i) => secretFieldIndex !== i);
            //fields.errors.category[categoryIndex].secretField = state.fields.input.category[categoryIndex].secretField.filter((item, i) => secretFieldIndex !== i);
            return {
                fields
            };
        });

    }

    const addCategory = () => {
        setState(state => {
            let fields = state.fields;
            fields.input.category.push({
                categoryName: '',
                secretField: [{
                    title: '',
                    secret: ''
                }]
            });
            fields.errors.category.push({
                categoryName: '',
                secretField: [{
                    title: '',
                    secret: ''
                }]
            });
            return {
                fields
            }
        });
    }

    const removeCategory = (categoryIndex) => {



        setState(state => {
            let fields = state.fields;
            fields.input.category.splice(categoryIndex, 1);
            fields.errors.category.splice(categoryIndex, 1);
            return {
                fields
            }
        });
    }

    const handleChangeField = (event, categoryIndex, secretFieldIndex) => {
        let fields = state.fields;
        if (event.target.id === 'categoryName') {
            fields.input.category[categoryIndex].categoryName = event.target.value;
            setState({
                fields
            });
        } else if (event.target.id === 'title' || event.target.id === 'secret') {
            fields.input.category[categoryIndex].secretField[secretFieldIndex][event.target.id] = event.target.value;
            setState({
                fields
            });

        } else {
            fields.input[event.target.id] = event.target.value;
            setState({
                fields
            });
        }
    }


    useEffect(() => {
        // Whatever code you want to run if props.projects change
        console.log(state);
    }, [state]);


    const next = () => {
        validation()
    }


    const validation = () => {
        let fields = state.fields;

        if (!fields.input.lockerName.match(/^[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ,:%&#|=;-_ ]+$/u)) {
            fields.errors.lockerName = 'Enter the name of the Locker';
        } else {
            fields.errors.lockerName = null;
        }
        fields.input.category.map((category, categoryIndex) => {
            if (!category.categoryName.match(/^[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ,:%&#|=;-_ ]+$/u)) {
                fields.errors.category[categoryIndex].categoryName = 'Enter the name of this category';
            } else {
                fields.errors.category[categoryIndex].categoryName = null;
            }
            category.secretField.map((secretField,secretFieldIndex)=>{
                if (!secretField.title.match(/^[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ,:%&#|=;-_ ]+$/u)) {
                    fields.errors.category[categoryIndex].secretField[secretFieldIndex].title = 'Enter the title of this secret';
                } else {
                    fields.errors.category[categoryIndex].secretField[secretFieldIndex].title = null;
                }

                if (!secretField.secret.match(/^[a-zA-Z0-9ÁáÉéÍíÓóÚúÑñ,:%&#|=;-_ ]+$/u)) {
                    fields.errors.category[categoryIndex].secretField[secretFieldIndex].secret = 'Enter the secret of this secret';
                } else {
                    fields.errors.category[categoryIndex].secretField[secretFieldIndex].secret = null;
                }
            })
        })


        setState(state => {

            return {
                fields
            };
        });
    }


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                className={classes.textField}
                id="lockerName"
                label="Locker name"
                variant="filled"
                onChange={handleChangeField}
                value={state.fields.input.lockerName}
                error={state.fields.errors.lockerName ? true : false}
                helperText={state.fields.errors.lockerName} />


            {state.fields.input.category.map((category, categoryIndex) => {
                return <div key={categoryIndex} >

                    <div className={classes.categoryContainer}>
                        <div className={classes.rowContainer}>
                            <TextField
                                className={classes.textFieldMedium}
                                id="categoryName"
                                label="Category name"
                                onChange={(e) => handleChangeField(e, categoryIndex, null)}
                                variant="filled"
                                error={state.fields.errors.category[categoryIndex].categoryName ? true : false}
                                helperText={state.fields.errors.category[categoryIndex].categoryName} />
                            <IconButton
                                className={classes.endRowButton}
                                aria-label="toggle password visibility"
                                onClick={() => removeCategory(categoryIndex)}>
                                <img className={classes.endRowButtonImage} src={addRed} alt="hide password" />
                            </IconButton>
                        </div>
                        {state.fields.input.category[categoryIndex].secretField.map((secretField, secretFieldIndex) => {
                            return <div key={secretFieldIndex} className={classes.rowContainer}>

                                <TextField
                                    style={{ marginRight: '5%' }}
                                    className={classes.textFieldSmall}
                                    id="title"
                                    onChange={(e) => handleChangeField(e, categoryIndex, secretFieldIndex)}
                                    label="Title of secret"
                                    variant="filled"
                                    value={state.fields.input.category[categoryIndex].secretField[secretFieldIndex].title}
                                    error={state.fields.errors.category[categoryIndex].secretField[secretFieldIndex].title ? true : false}
                                    helperText={state.fields.errors.category[categoryIndex].secretField[secretFieldIndex].title} />

                                <FormControl style={{ marginLeft: '5%' }} variant="filled" className={classes.textFieldSmall}>
                                    <InputLabel htmlFor="filled-adornment-password">Secret</InputLabel>
                                    <OutlinedInput
                                        type={state.showPassword ? 'text' : 'password'}
                                        helpertext=""
                                        id="secret"
                                        onChange={(e) => handleChangeField(e, categoryIndex, secretFieldIndex)}
                                        variant="filled"
                                        value={state.fields.input.category[categoryIndex].secretField[secretFieldIndex].secret}
                                        error={state.fields.errors.category[categoryIndex].secretField[secretFieldIndex].secret ? true : false}
                                        helperText={state.fields.errors.category[categoryIndex].secretField[secretFieldIndex].secret}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton

                                                    aria-label="toggle password visibility"
                                                    onClick={showHidePasword}
                                                >
                                                    {state.showPassword ?
                                                        <img className={classes.iconButton} src={Eye} alt="ver contraseña" />
                                                        :
                                                        <img className={classes.iconButton} src={EyeOff} alt="ocultar contraseña" />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <Typography variant="caption" >
                                        {state.fields.errors.category[categoryIndex].secretField[secretFieldIndex].secret}
                                    </Typography>
                                </FormControl>
                                <IconButton
                                    className={classes.endRowButton}
                                    aria-label="toggle password visibility"
                                    onClick={() => removeSecretField(categoryIndex, secretFieldIndex)}>
                                    <img className={classes.endRowButtonImageNoRotate} src={trash} alt="ocultar contraseña" />
                                </IconButton>
                            </div>
                        })}

                        <div className={classes.rowContainer}>

                            <Button onClick={() => addSecretField(categoryIndex)} className={classes.addFieldButton} variant="contained" color="primary" disableElevation>
                                Add Field
                            </Button>
                        </div>


                    </div>

                </div>

            })}
            <Button onClick={addCategory} className={classes.addCategoryButton} variant="contained" color="primary" disableElevation>
                Add Category
            </Button>

            <div className={classes.nextButtonContainer}>

                <Button onClick={next} className={classes.nextButton} variant="contained" color="secondary" disableElevation>
                    Next
            </Button>
            </div>



        </form>

    );

}

export default CreateLocker;
