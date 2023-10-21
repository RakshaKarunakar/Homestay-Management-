import React, { useState } from 'react';
import '../Room.css';
import { Button,TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
//import { Stack,  MenuItem } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import HomeIcon from '@mui/icons-material/Home';
import RedoIcon from '@mui/icons-material/Redo';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';

export default function RoomForm() {
    const [Room, setRoom] = useState([])
    let initialValue;
    if (localStorage.getItem("Room") === null) {
        initialValue = [];
    } else {
        initialValue = JSON.parse(localStorage.getItem("Room"));
    }
    const [value, setValue] = useState(initialValue);

    const Click = (e) => {
        setRoom(e.target.value)
        setRoom({ ...Room, [e.target.name]: e.target.value });
    }

    const handelsubmit = (event) => {
        const newId = value.length === 0 ? 1 : value[value.length - 1].id + 1;
        let user = {
            id: newId,
            ...Room
        }
        const newValue = [...value, user]
        setValue(newValue);
        localStorage.setItem("Room", JSON.stringify(newValue));
        alert(' Room Data saved successfully!');
    }

    return (
        <>
            <center>
                <div className="Room-listing">
                    <div className='Room-form' >
                        <h3>Rooms Register</h3>

                        <TextField placeholder='Entrer Room Name'
                            type="text" name='name' label='Name'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)} /><br />

                        <TextField placeholder='Entrer RoomNo'
                            type="number" name="roomno" label='RoomNo'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)} /><br />

                        <TextField placeholder='Entrer Description'
                            type="text" name='description' label='Description'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)} /><br />

                        <TextField placeholder='Entrer your Category'
                            type="text" name='category' label='Category'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Click(e)} /><br />

                        <TextField placeholder='Entrer persons'
                            type="number" name='persons' label='Persons'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)} /><br />

                        <TextField
                            placeholder='Price' type="number"
                            name='price' label='Price'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)}
                        />

                        <TextField placeholder='Enter Photo'
                            type="text" name='photo' label='Photo'
                            sx={{ mr: 1, my: 1, minHeight: '40px' }} required={true}
                            onChange={(e) => Click(e)} /><br />

                        <div>
                            <center spacing={3} direction="row" >
                                <Link to='/ROOMS_BOOKING'><Button variant="contained" onClick={handelsubmit} >Submit</Button > </Link>
                            </center>
                        </div><br />
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', marginTop: '10px', alignContent: 'flex-end' }}>
                            <Link to='/'> <Button type='button' variant="contained" size='small' startIcon={<UndoIcon />} endIcon={<HomeIcon />}> </Button > </Link>
                            <Link to='/ROOMS_BOOKING'><Button type='button' variant="contained" size='small' startIcon={<RedoIcon />} endIcon={<BedroomChildIcon />} ></Button > </Link>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
