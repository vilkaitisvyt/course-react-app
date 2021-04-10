import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography, CardMedia} from '@material-ui/core';
import { AppContext } from '../AppContext'
import { useHistory } from 'react-router-dom';


const CourseCard = (props) => {

  const history = useHistory();
  const [selectedCourse, setSelectedCourse] = useContext(AppContext);
  const{id, name, description} = props;

    return (
      <Card>
        <CardMedia
          image="logo192.png"
          style={{minHeight: '200px', maxWidth: '200px', margin: 'auto'}}
          title="Card image"
        />
        <CardContent>
          <Typography variant="h5" component="h2" >
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => {

            setSelectedCourse(id);
            history.push("/course");
            
          }}>Select</Button>
        </CardActions>
      </Card>
    )    
};

export default CourseCard;