import React from 'react'
import {Card,CardContent,CardActions,Typography,CardMedia}from '@mui/material';
import { Button } from '@mui/material';

export default function HSView(props) {
  console.log(props.SelectUser)

  return (<>
    <div>
      <Card sx={{ maxWidth: 500, height: 700 }}>
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            <strong>Room No:<p> {props.SelectUser.roomno}</p></strong>
            <strong>Name:<p> {props.SelectUser.names}</p></strong>
            <strong>Phone no:<p> {props.SelectUser.phone}</p></strong>
            <strong>Address:<p> {props.SelectUser.address}</p></strong>
            <strong>Persons:<p> {props.SelectUser.persons}</p></strong>
            <strong>Check In Date: <p>{props.SelectUser.indate}</p></strong>
            <strong>Check Out Date:<p> {props.SelectUser.outdate}</p></strong>
          </Typography>
          <CardMedia
            sx={{ height: 200 }}
            image={props.SelectUser.photo}
            title="Photo"
          />
        </CardContent>
        <CardActions>
          {/* <Button size='medium' className="btn btn-success m-2"  onClick={props.Close}>Save</Button> */}
          <Button size='medium' variant='contained' onClick={props.Close}> Close</Button>
        </CardActions>
      </Card>
    </div>
  </>
  );
}
