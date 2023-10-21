import React from 'react'
import {Card,CardContent,CardActions,Typography }from '@mui/material';
import { Button } from '@mui/material';

export default function RoomDelete({selectedRoom, room, setRoom, Deletes }) {
    console.log(selectedRoom);
  
      const Delete = async (item) => {
          Deletes()
          const newProductValue = room.filter((i) => i.id != item.id);
          console.log(newProductValue);
          setRoom(newProductValue);
          localStorage.setItem('Room', JSON.stringify(newProductValue));
          alert(`${selectedRoom.roomno} details deleted successfully!`); 
      }
  
    return (
      <div>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <h4>Are you surewant to delete {selectedRoom.roomno}!!! </h4><br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={Deletes}>Close</Button>
            <Button size="small" onClick={() => Delete(selectedRoom)} > yes Delete</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
  