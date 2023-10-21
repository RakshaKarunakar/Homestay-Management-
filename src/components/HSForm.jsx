import React, { useState } from 'react';
import { Button,TextField, } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HSForm(props) {
    const { handleClose, price, roomno , persons } = props;

    const [form, setForm] = useState({
        price: price, roomno: roomno, persons:persons
    })
    let initialValue;
    if (localStorage.getItem("Home") === null) {
        initialValue = [];
    } else {
        initialValue = JSON.parse(localStorage.getItem("Home"));
    }
    const [value, setValue] = useState(initialValue);

    const [phoneError, setPhoneError] = useState(false);
    const [nameError, setNameError] = useState(false);

    const Click = (e) => {
        if (e.target.name === 'phone' && e.target.value.length > 10) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }

        if (e.target.name === 'names') {
            if (!/^[A-Za-z, ]*$/.test(e.target.value)) {
                setNameError(true);
            } else {
                setNameError(false);
            }
        }
        
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handelsubmit = (event) => {
        if ((form.names ?? '').trim() === '' || (form.phone ?? '').trim() === '') {
            alert('Please fill out the Name and Phone Number fields.');
        } else  {
            const newId = value.length === 0 ? 1 : value[value.length - 1].id + 1;
            let user = {
                id: newId,
                ...form
            }
            const newValue = [...value, user]
            setValue(newValue);
            localStorage.setItem("Home", JSON.stringify(newValue));
            alert('Data saved successfully!');
        }
    }

    return (
        <>
            <center>
                <div className="form-listing">
                    <div className='form-card' sx={{ display: 'flex', alignItems: 'flex-center', maxWidth: 400, height: 680 }}>
                        <hr /><h3>Homestay Registration</h3><br />

                        <TextField placeholder='RoomNo' label='RoomNo'
                            type="number" name="roomno" value={form.roomno} inputProps={{ readOnly: true }}
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }}
                            onChange={(e) => Click(e)} />


                        <TextField placeholder='Entrer your Name'
                            type="text" name='names' label='Name'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px', borderColor: nameError ? 'red' : '', }}
                            required={true} error={nameError}
                            helperText={nameError ? 'Name should contain only letters and commas' : ''}
                            onChange={(e) => Click(e)} renderValue={(value) => `${value}`} />

                        <TextField placeholder='Entrer your PhoneNo'
                            type="number" name='phone' label='Phone'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px', borderColor: phoneError ? 'red' : '', }}
                            required={true} error={phoneError}
                            helperText={phoneError ? 'Phone number should be 10 digits or less' : ''}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Entrer your Address'
                            type="text" name='address' label='Address'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Entrer total Persons'
                            type="number" name='persons' label='Persons'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }} required={true}
                            value={form.persons} inputProps={{ readOnly: true }}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Check in date'
                            type="Date" name='indate' label='CheckInDate'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }} required={true}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Check out date'
                            type="Date" name='outdate' label='CheckOutDate'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }} required={true}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Price'
                            type="number" name='price' label='Price'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }}
                            value={form.price} inputProps={{ readOnly: true }}
                            onChange={(e) => Click(e)} />

                        <TextField placeholder='Enter document'
                            type="text" name='photo' label='Photo'
                            sx={{ width: '60%', mr: 0.5, my: 0.5, minHeight: '30px' }} required={true}
                            onChange={(e) => Click(e)} />

                        <div>
                            <center spacing={3} direction="row" >
                                <Link to='/REGISTER_DATA'> <Button variant="contained" onClick={handelsubmit}
                                    disabled={form.names?.trim() === '' || form.phone?.trim() === ''}>Submit</Button ></Link>
                            </center>
                            <Button size='small' variant='contained' onClick={handleClose}
                                style={{ marginTop: '-60px', marginLeft: '400px' }} > Close</Button>
                        </div>
                        <br />
                    </div>
                </div>
            </center>
        </>
    )
}
