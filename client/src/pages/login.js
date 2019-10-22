import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

//mui stuff
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios'
//import { relative } from 'path';
const styles = {
    form:{
        textAlign: 'center'
    },
    pageTitle:{
        margin: '10px auto 10px auto'
    },
    textField:{
        margin:'10px auto 10px auto'
    },
    button:{
        marginTop: 20,
        position: 'relative',

    },
    customError:{
        color:'red',
        fontSize: '0.8',
        marginTop: 10,
    },
    progress:{
        position: 'absolute',
    }
    

};

class login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors:{}
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.get('http://localhost:3000/api/profile/add',user)
           .then(res =>{
               console.log(res.data);
               this.setState({
                   loading: false
               });
               this.props.history.push('/profile');

           })
           .catch(err =>{
               this.setState({
                   errors: err.response.data,
                   loading:false
               })
           })



    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    render() {
        const { classes } = this.props;
        const{errors,loading} = this.state;
        return (
           
           <Grid container className={classes.form}>
               <Grid item sm />
               <Grid item sm>
                  <Typography variant='h4' className={classes.pageTitle}>
                   Login
                   </Typography>
                   <form noValidate onSubmit={this.handleSubmit}>
                       <TextField id="email" name="email" 
                       type="email" label="Email" 
                       variant="outlined"
                       className={classes.textField}
                       helperText = {errors.email}
                       error={errors.email ? true : false}
                       value={this.state.email} onChange={this.handleChange} fullWidth/>
                       <TextField id="password" name="password"
                       variant="outlined"
                        type="password" label="Password" 
                        className={classes.textField}
                        helperText = {errors.password}
                        error={errors.password ? true : false}
                        value={this.state.password} onChange={this.handleChange} fullWidth/>
                       {errors.general && (
                           <Typography variant="body2" className={classes.customError}>
                             {errors.general}  
                           </Typography>
                       )}
                       <Button type="submit" variant="contained" color="primary"
                        fullWidth
                        disabled = {loading}
                        className={classes.button}>
                           Login
                           {loading && (
                               <CircularProgress className={classes.progress}/>
                           )}
                           </Button>
                       <br/>
                       <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                      {/*  <small>Don't have an account ? Sign up <Link to="/signup">Here</Link>
                       </small> */}
                   </form>
           
                   </Grid>
                   <Grid item sm />
           </Grid>
            
        );
    }
}
login.propTypes = {
  classes: PropTypes.object.isRequired

}

export default withStyles(styles)(login);
