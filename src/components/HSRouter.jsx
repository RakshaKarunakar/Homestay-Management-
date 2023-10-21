import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HSTable from './HSTable'
import HSForm from './HSForm'
import HSView from './HSView'
import HSDelete from './HSDelete'
import HSUpdate from './HSUpdate'
import HSHome from './HSHome'
import Roomcard from './Roomcard'
import RoomForm from './RoomForm'
import RoomUpdate from './RoomUpdate'
import RoomDelete from './RoomDelete'
import { useState,useEffect } from 'react'


export default function HSRouter() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  //Filter
  const [dateFilter, setDateFilter] = useState('');//date 
  const [SelectUser, setSelectUser] = useState('')   //Buttons

  //from FORM to get data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Home")) || [];
    setData(storedData);
  }, [data]); 
  
  const sortedData = data.slice().sort((a, b) => new Date(b.indate) - new Date(a.indate));

  const filteredData = sortedData.filter((item) => {
    return (
    Object.keys(item).filter(key => key !== "photo").some((key) =>
      String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
    )  &&
      (!dateFilter.startDate || new Date(item.indate) >= new Date(dateFilter.startDate)) &&
      (!dateFilter.endDate || new Date(item.outdate) <= new Date(dateFilter.endDate))
    );
  });
  // String(item.name).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  

  // Get a list of available room numbers 
  const currentDate = new Date();
  const occupiedRoomNumbers = data
    .filter((item) => new Date(item.indate) <= currentDate && new Date(item.outdate) >= currentDate)
    .map((item) => item.roomno);

  const availableRoomNumbers = data
    .filter((item) => !occupiedRoomNumbers.includes(item.roomno))
    .sort((a, b) => a.roomno - b.roomno)
    .map((item) => item.roomno);

  //bUTTON FUNCTIONS---->TABLE MODAL
  //---VIEW
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setOpen(true);
    console.log(item)
    setSelectUser(item)
  }
  const handleClose = () => setOpen(false);

  //---Delete
  const [selectdelete, setselectDelete] = React.useState(false);
  const handleDelete = (item) => {
    setselectDelete(true);
    console.log(item)
    setSelectUser(item)
  }
  const handleDeletes = () => setselectDelete(false);

  //TABLE FUNCTIONS
  //calculateDateDifference 
  const calculateDateDifference = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate - checkInDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24); 
    return differenceInDays;
  };

  //calculateTotalPrice
  const calculateTotalPrice = (persons, price, days) => {
    return persons * price * days;
  };

  //MODAL STYLE++
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, 
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 10,
    p: 4,
  };

  return (
    <div><BrowserRouter>
      <Routes>
          <Route exact path='/' element={<HSHome/>} />
          <Route exact path='/REGISTRATION_FORM' element={<HSForm />} />
          <Route exact path='/ROOMS_BOOKING' element={<Roomcard occupiedRoomNumbers={occupiedRoomNumbers} />} />
          <Route exact path='/RoomForm' element={<RoomForm />} />
          <Route exact path='/REGISTER_DATA' element={<HSTable searchTerm={searchTerm} dateFilter={dateFilter} SelectUser={SelectUser} handleDeletes={handleDeletes}
          availableRoomNumbers={availableRoomNumbers} handleClose={handleClose} open={open} handleDelete={handleDelete} calculateDateDifference={calculateDateDifference} filteredData={filteredData}
           calculateTotalPrice={calculateTotalPrice} setSearchTerm={setSearchTerm} selectdelete={selectdelete} setDateFilter={setDateFilter} handleOpen={handleOpen} data={data} setData={setData} style={style} />} />
          <Route exact path='/HSView' element={<HSView />} />
          <Route exact path='/HSDelete' element={<HSDelete />} />
          <Route exact path='/HSUpdate/:id' element={<HSUpdate />} />
          <Route exact path='/RoomUpdate/:id' element={<RoomUpdate />} />
          <Route exact path='/RoomDelete' element={<RoomDelete />} />
        </Routes>
      </BrowserRouter>
  </div>
  )
}
