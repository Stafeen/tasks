import React, { Component,  Fragment  } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'

//MUI
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Muilink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
//Redux
import {logoutUser, uploadImage} from '../redux/actions/userActions'
import { connect } from 'react-redux';
//Icons
import EditIcon from '@material-ui/icons/Edit'

import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles = (theme) => ({
    paper: {
        padding:20
    },
    profile:{
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left:'70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height:200,
            objectfit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%',
        },
        '& .profile-details':{
            textAlign:'center',
            '& span, svg':{
                verticalAlign: 'middle'
            }
            
        },
        '& a ':{
            color: theme.palette.primary.main

        },
        '& hr':{
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button':{
            '&:hover':{
                cursor: 'pointer'
            }
        },
        buttons: {
            textAlign: 'center',
            '& a': {
                margin: '20px 10px'
            }
        }
    }
});

class Profile extends Component {
    handlerImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image',image, image.name);
        this.props.uploadImage(formData);

    };
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }
    
    
    render() {
        const {classes,user: {credentials:{username,createdAt,photo,story,website,location},
        loading,
        authenticated
    }} = this.props;
    let profileMarkup = !loading ? (authenticated ? (
        <Paper className = {classes.paper}>
            <div className={classes.profile}>
                <div className ="image-wrapper">
                    <img src={photo} alt="profile" className="profile-image"/>
                    <input type="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}/>
                    <Tooltip title="Edit profile picture" placement="top">

                    <IconButton onClick={this.handleEditPicture} className="button">
                        <EditIcon color="primary"/>
                    </IconButton>
                    </Tooltip>
                </div>
                <hr/>
                <div className="profile-details">
                    <Muilink component ={Link} to={`/users/${username}`} color="primary" variant="h5">
                        @{username}
                    </Muilink>
                    <hr/>
                    {story && <Typography variant="body2">{story}</Typography>}
                    <hr/>
                {location && (
                    <Fragment>
                         <LocationOn color ="primary"/>
                     <span>{location}</span>
                     <hr/>
                    </Fragment>
                )}
                    {website && (
                        <Fragment>
                        <LinkIcon color = "primary"/>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            { ' '}{website}
                        </a>
                        <hr/>
                        </Fragment>
                    )}
                    <CalendarToday color="primary"/>{' '}
                    <span>Joined {dayjs(createdAt).format('MMM YYY')}</span>
                        </div>
                    </div>
                    </Paper>
                       ) : (
                          <Paper className={classes.paper}>
                             <Typography variant="body2" align="center">
                              No Profile Found, please login again</Typography>
                              <div className={classes.buttons}>
                                   <Button variant="contained" color="primary" component={Link} to="/login">
                                       Login</Button>   
                                   <Button variant="contained" color="secondary" component={Link} to="/signup">
                                        Sign up</Button>   
                
                              </div> 
                         </Paper>

                   )) : (<p>loading...</p>)
                     return profileMarkup; 
            
        
    }

}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapActionsToProps = {logoutUser, uploadImage};
Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Profile));

