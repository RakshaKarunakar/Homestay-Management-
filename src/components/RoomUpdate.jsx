import React, { useEffect, useState } from 'react'
import '../Room.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import HomeIcon from '@mui/icons-material/Home';
import RedoIcon from '@mui/icons-material/Redo';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';

export default function RoomUpdate() {

    //assign variable to useparams
    const params = useParams()
    console.log(params.id)

    //using nav for dissmiss modal
    const nav = useNavigate()

    //to assign id
    let userId = params.id;

    //to get data 
    const [retrive, setRetrive] = useState([]);
    const [single, setSingle] = useState([]);
    const [index, setIndex] = useState([]);

    useEffect(() => {
        const AllUser = (JSON.parse(localStorage.getItem("Room")));
        setRetrive(AllUser)

        let newRetrive = AllUser.find((i) => i.id == userId)
        console.log(newRetrive, 'newRetrive')
        setSingle(newRetrive)

        //to find index 
        let UserIndex = AllUser.findIndex((e) => e.id == userId)
        setIndex(UserIndex)
        //console.log(UserIndex)

    }, [])

    //console.log(retrive);
    console.log(index);
    console.log(single);

    //used to change particular input using id
    const Handleupdate = (e) => {
        setSingle(e.target.value)
        setSingle({ ...single, [e.target.name]: e.target.value });
    }

    //splice-> to add, remove &update
    const Handlesave = async () => {
        const updateData = [...retrive];
        updateData.splice(index, 1, single);
        localStorage.setItem("Room", JSON.stringify(updateData));
        await nav('/ROOMS_BOOKING')
        alert(`${single.roomno}'s details updated successfully!`);
    }

    return (
        <>
            <center>
                <div className='Room-listing'>
                    <div className='Room-form'>
                        <h3>Rooms Update</h3>

                        <TextField placeholder='Entrer Room Name'
                            type="text" name='name' label='Name'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.name} /><br />

                        <TextField placeholder='Entrer RoomNo'
                            type="number" name="roomno" label='RoomNo'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.roomno} /><br />

                        <TextField placeholder='Entrer Description'
                            type="text" name='description' label='Description'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.description} /><br />

                        <TextField placeholder='Entrer your Category'
                            type="text" name='category' label='Category'
                            sx={{ color: 'action.active', mr: 0.5, my: 0.5, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.category} /><br />

                        <TextField placeholder='Entrer Persons'
                            type="number" name='persons' label='Persons'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.persons} /><br />

                        <TextField
                            placeholder='Enter Price' type="number"
                            name='price' label='Price'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.price} /><br />

                        <TextField placeholder='Enter Photo'
                            type="text" name='photo' label='Photo'
                            sx={{ color: 'action.active', mr: 1, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.photo} /><br />

                        <div>
                            <center spacing={3} direction="row" >
                                <Link to='/ROOMS_BOOKING'><Button variant="contained" onClick={Handlesave} >Submit</Button > </Link>
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
    