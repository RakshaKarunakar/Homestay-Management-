import React, { useEffect, useState } from 'react'
import '../HSForm.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UndoIcon from '@mui/icons-material/Undo';

export default function HSUpdate() {

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
        const AllUser = (JSON.parse(localStorage.getItem("Home")));
        setRetrive(AllUser)

        let newRetrive = AllUser.find((i) => i.id == userId)
        console.log(newRetrive, 'newRetrive')
        setSingle(newRetrive)

        //to find index 
        let UserIndex = AllUser.findIndex((e) => e.id == userId)
        setIndex(UserIndex)

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
        localStorage.setItem("Home", JSON.stringify(updateData));
        await nav('/REGISTER_DATA')
        alert(`${single.names}'s details updated successfully!`);
    }

    return (
        <>
            <center>
                <div className='Up-header'>
                    <div className='UpForm'><br />
                        <h4>UPDATE FORM</h4>
                        
                        <TextField placeholder='entrer RoomNo'
                            type="number" name='roomno' label='RoomNo'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.roomno} /><br />

                        <TextField placeholder='entrer your Name'
                            type="text" name='names' label='Name'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.names} /><br />

                        <TextField placeholder='entrer your PhoneNo'
                            type="number" name='phone' label='Phone'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.phone} /><br />

                        <TextField placeholder='entrer your Address'
                            type="text" name='address' label='Address'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.address} /><br />

                        <TextField placeholder='entrer total Persons'
                            type="number" name='persons' label='Persons'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.persons} /><br />

                        <div>
                            <TextField placeholder='Check in date'
                                type="Date" name='indate' label='CheckInDate'
                                sx={{ width: '35%', mr: 0.5, my: 1, minHeight: '30px' }}
                                onChange={(e) => Handleupdate(e)} value={single.indate} />

                            <TextField placeholder='Check out date'
                                type="Date" name='outdate' label='CheckOutDate'
                                sx={{ width: '35%', mr: 0.5, my: 1, minHeight: '30px' }}
                                onChange={(e) => Handleupdate(e)} value={single.outdate} /><br />
                        </div>

                        <TextField placeholder='Price'
                            type="number" name='price' label='Price'
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.price} /><br />

                        <TextField placeholder='entrer Document'
                          /*type="file"*/ type="text" name='photo' label='Document'
                            accept="image/*, .pdf, .doc, .docx, .link"
                            sx={{ width: '70%', mr: 0.5, my: 1, minHeight: '40px' }}
                            onChange={(e) => Handleupdate(e)} value={single.photo} /><br />

                        <div>
                            <center spacing={3} direction="row" >
                                <Link to='/REGISTER_DATA'><Button variant="contained" size='medium' onClick={Handlesave} >Submit</Button></Link>
                            </center>
                        </div>
                    </div>
                    <div>
                        <Link to='/REGISTER_DATA'> <Button type='button' variant="contained" size='small' startIcon={<UndoIcon />} endIcon={<TextSnippetIcon />}></Button ></Link>
                    </div>
                </div>
            </center>
        </>
    )
}
