import React, { Component, Fragment} from 'react'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'
import {uploadImage} from '../redux/actions/userActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
//import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
//import Muilink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'
//import EditDetails from '../components/EditDetails'; 
//import Photo from '../assets/image/IMG-20180322-WA0045.jpg'
const styles = (theme) => ({
       paper: {
          padding: 20
        },
        profile: {
          '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
            }
          },
          '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
          },
          '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
              verticalAlign: 'middle'
            },
            '& a': {
              color: theme.palette.primary.main
            }
          },
          '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
          },
          '& svg.button': {
            '&:hover': {
              cursor: 'pointer'
            }
          }
        },
        buttons: {
          textAlign: 'center',
          '& a': {
            margin: '20px 10px'
          }
        }
      });
   

 class picture extends Component {
     
     
    
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
        const {classes,user: {credentials:{username,createdAt,imageUrl,story,website,location}}}
        = this.props;
        return (
            <Paper className = {classes.paper}>
            <div className={classes.profile}>
                <div className ="image-wrapper">
                    <img src={imageUrl} alt="profile" className="profile-image" name="file"/>
                    <input type="file" name="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}
                    />
                    <Tooltip title="Edit profile picture" placement="top">
                    <IconButton onClick={this.handleEditPicture} className="button">
                    <EditIcon color="primary"/>
                    </IconButton>
                    </Tooltip>
                   
                </div>
                    <hr/>
                <div className="profile-details">
                {story && <Typography variant="body2">{username}</Typography>}
            
            <hr/>
            {story && <Typography variant="body2">{story}</Typography>}
                    <hr/>
            {location && (
                <Fragment>
                    <LocationOn color ="primary"/><span>{location}</span>
                <hr/>
                </Fragment>
                )}
                {website && (
                    <Fragment>
                        <LinkIcon color = "primary"/>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            {' '}{website}
                        </a>
                        <hr/>
                    </Fragment>
                    )}
                    <CalendarToday color="primary"/>{' '}
                    <span>Joined {dayjs(createdAt).format('M/D/YYYY')}</span>
                            </div>
                    {/*<EditDetails/>*/}
                   </div>
            </Paper>
        )

    }
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapActionsToProps = {uploadImage};
picture.propTypes = {
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(picture));









