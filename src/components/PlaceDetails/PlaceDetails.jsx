import React from 'react';
import {
  Box,
  Topography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles';

const PlaceDetails = ({ place }) => {
  const classes = useStyles(styles);

  return (
    <Card elevation={6}>
      {/* <CardMedia style={{height:350}}
    image={place.photo?place.photo.images.large.url : }/> */}
    </Card>
  );
};

export default PlaceDetails;
