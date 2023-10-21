import React from 'react'
import {Card,CardContent,CardActions,Typography }from '@mui/material';
import { Button } from '@mui/material';

export default function HSDelete({SelectUser, data, setData, Deletes }) {
  console.log(SelectUser);

    const Delete = async (item) => {
        Deletes()
        const newProductValue = data.filter((i) => i.id != item.id);
        console.log(newProductValue);
        setData(newProductValue);
        localStorage.setItem('Home', JSON.stringify(newProductValue));
        alert(`${SelectUser.names} details deleted successfully!`); 
    }

  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
    <CardContent>
        <Typography variant="body2" color="text.secondary">
            <h4>Are you surewant to delete {SelectUser.name}!!! </h4><br />
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" onClick={Deletes}>Close</Button>
        <Button size="small" onClick={() => Delete(SelectUser)} > yes Delete</Button>
    </CardActions>
</Card></div>
  )
}
