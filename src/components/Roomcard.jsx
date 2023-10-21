import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Modal, Typography, LinearProgress } from '@mui/material';
import '../Room.css';
import HSForm from './HSForm';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom';
import RoomDelete from './RoomDelete';
import { purple } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 'auto',
  //bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 1,
  p: 1,
};

export default function RoomCard({ occupiedRoomNumbers }) {
  const [room, setRoom] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  // useEffect(() => {
  //   setRoom(JSON.parse(localStorage.getItem("Room")));
  // }, []);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Room")) || [];
    setRoom(storedData);
  }, [room]);

  const filteredRooms = room.filter((item) => {
    const searchTermLower = search.toLowerCase();
    return Object.keys(item).filter((key) => key !== 'photo' && key !== 'id').some((key) =>
      String(item[key]).toLowerCase().includes(searchTermLower)
    );
  });

  const sortedRooms = filteredRooms.slice().sort((a, b) => a.roomno - b.roomno);


  //Modal HSForm
  const handleOpen = (item) => {
    setOpen(true);
    setSelectedRoom(item);
  };

  const handleClose = () => setOpen(false);

  const [selectdelete, setselectDelete] = React.useState(false);
  const handleDelete = (item) => {
    setselectDelete(true);
    console.log(item)
    setSelectedRoom(item)
  }
  const handleDeletes = () => setselectDelete(false);


  return (
    <>
      <Box >
        <center>
          <div className='Room' >
            <div className='Room-body' >
              <div>
                <img src="https://th.bing.com/th/id/OIP.I5z2kYpjxv-ZEVEzSZUwtAAAAA?pid=ImgDet&w=200&h=153&c=7&dpr=1.3" alt="" class="rounded-image" />
              </div>
              <div className="text" >
                <h2 style={{ color: 'purple', fontStyle: 'Bold' }}>SUNSET HOMESTAY </h2>
                <LinearProgress color="secondary" />
              </div>
              <br />
              <Link to='/'> <Button variant="non contained" size='max' endIcon={<HomeIcon sx={{ color: purple[500], fontSize: 50, alignItems: 'center' }} />} style={{ marginRight: '0px' }}>
                <h6 style={{ color: 'purple', fontStyle: 'Bold', margin: '10px' }}>{/*HOME*/}</h6></Button > </Link>
            </div>

            <div className='Room-search'>
              <div className="input-group" style={{ width: "50%", alignItems: 'center', boxShadow: 'revert' }}>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="button" className="btn btn-primary">Search</button>
              </div><br />
            </div >

            <div style={{ alignContent: 'flex-end' }} className='Room-Add'>
              <Link to='/RoomForm'> <Button type='button' variant="contained" size='small' startIcon={<UndoIcon />} endIcon={<NoteAddIcon />} style={{ marginRight: '10px' }}> {/*RoomForm */} </Button > </Link>
              <Link to='/REGISTER_DATA'> <Button type='button' variant="contained" size='small' startIcon={<RedoIcon />} endIcon={<TextSnippetIcon />} style={{ marginRight: '10px' }}> {/*RoomForm */} </Button > </Link>
            </div>

            <div className='Room-card'>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {sortedRooms.map((item) => (
                  <Card key={item.id} 
                  className={`Room-image ${occupiedRoomNumbers && occupiedRoomNumbers.includes(item.roomno) ? 'occupied-card' : ''}`}>
                    <CardMedia
                      component="img" alt=''
                      width="300"  height="200"
                      src={item.photo}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <h4>{item.name}</h4>
                        <p>Room No: {item.roomno}</p>
                        <p>{item.description}</p>
                        <p>Category: {item.category}</p>
                        <p>Sharing type: {item.persons}</p>
                        <p>Price: ${item.price} per night</p>
                      </Typography>
                    </CardContent>
                    <Divider />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <CardActions>
                        <center>
                          {occupiedRoomNumbers.includes(item.roomno) ? (
                            <Button size='small' variant="contained" color="error">
                              Booked
                            </Button>
                          ) : (
                            <Button onClick={() => handleOpen(item)} variant='contained' size='small' color='primary'>
                              Book
                            </Button>
                          )}
                        </center>
                      </CardActions>
                    </div>
                    <Divider />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link to={`/RoomUpdate/${item.id}`}><Button size='small' endIcon={<EditSharpIcon />} color="info" ></Button ></Link>
                      <Button type='button' color="error" size='small' startIcon={<DeleteIcon />} onClick={() => handleDelete(item)} ></Button >
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <HSForm selRoom={selectedRoom} handleClose={handleClose}
                  price={selectedRoom.price} roomno={selectedRoom.roomno} persons={selectedRoom.persons} />
              </Box>
            </Modal>
          </div>
          <div>
            <Modal
              open={selectdelete}
              onClose={handleDeletes}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <RoomDelete room={room} setRoom={setRoom} selectedRoom={selectedRoom} Deletes={handleDeletes} />
              </Box>
            </Modal>
          </div>

          <div>
            {filteredRooms.length === 0 && (
              <div className="alert alert-warning">
                No results found for "{setSearch}".
              </div>
            )}
          </div>

        </center>
      </Box>
    </>
  );
}
