import React from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import HSDelete from './HSDelete';
import HSView from './HSView';
import SearchIcon from '@mui/icons-material/Search';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete'
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
//import { purple} from '@mui/material/colors';

export default function HSTable({ SelectUser, handleDeletes, availableRoomNumbers, handleClose,
  open, handleDelete, calculateDateDifference, filteredData, dateFilter, searchTerm, setSearchTerm,
  setDateFilter, calculateTotalPrice, handleOpen, selectdelete, data, setData, style }) {


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    return formattedDate;
  };

  return (
    <>
      <div style={{ backgroundColor: ' #daf6fb8a' }}>
        <div className="Table-header">
          <Link to='/'> <Button type='button' variant="contained" size='max' startIcon={<UndoIcon />} endIcon={<HomeIcon />} > {/* Home */} </Button > </Link>
          {/*sx={{ color: purple[500], fontSize: 25, alignItems:'center' }}*/}
          <Link to='/ROOMS_BOOKING'> <Button type='button' variant="contained" size='max' startIcon={<RedoIcon />} endIcon={<BedroomChildIcon />} > {/*Room card */} </Button > </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
          <div className="input-group" style={{ width: "20%", margin: '20px  20px 0px 90px', height: '15px', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" className="btn btn-primary"><SearchIcon style={{ marginBlock: '-30px', cursor: 'pointer' }} /></button>
          </div>
          <TextField
            type="date"
            size="small"
            label="Start Date"
            sx={{ margin: '20px', backgroundColor: 'white' }}
            value={dateFilter.startDate}
            onChange={(e) => setDateFilter({ ...dateFilter, startDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="date"
            size="small"
            label="End Date"
            sx={{ margin: '20px', backgroundColor: 'white' }}
            value={dateFilter.endDate}
            onChange={(e) => setDateFilter({ ...dateFilter, endDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginBottom: '30px', margin: '10px' }}>
          <table className="table align-middle mb-0 bg-blue">
            <thead>
              <tr className='table-success'>
                <th style={{ width: '60px', textAlign: 'center' }}>RoomNo</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Name</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Phone</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Address</th>
                <th style={{ width: '60px', textAlign: 'center' }}>Persons</th>
                <th style={{ width: '120px', textAlign: 'center' }}>CheckIn</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Checkout</th>
                <th style={{ width: '120px', textAlign: 'center' }} >Stay duration</th>
                <th style={{ width: '60px', textAlign: 'center' }}>Price</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Total Price</th>
                <th>Document</th>
                <th>Actions</th><hr />
                <th >Available Rooms</th>
              </tr>
            </thead>
            <tbody >
              {filteredData.map((item, index) => (
                <tr className={index % 2 === 0 ? 'table-info' : 'table-info'} key={item.id}>
                  <th style={{ width: '60px', textAlign: 'center' }}>{item.roomno}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{item.names}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{item.phone}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{item.address}</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>{item.persons}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{formatDate(item.indate)}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{formatDate(item.outdate)}</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>{calculateDateDifference(item.indate, item.outdate)} days</th>
                  <th style={{ width: '60px', textAlign: 'center' }}>{item.price}</th>
                  <th style={{ width: '100px', textAlign: 'center' }}>{calculateTotalPrice(item.persons, item.price, calculateDateDifference(item.indate, item.outdate))}</th>
                  <td><img src={item.photo} alt="" style={{ width: '50px', height: '50px' }} className='rounded-circle' /></td>

                  <td>
                    <Button variant="contained" color="primary" className="btn btn-primary m-2" size='small' startIcon={<RemoveRedEyeIcon />} onClick={() => handleOpen(item)} >VIEW</Button >
                    <Link to={`/HSUpdate/${item.id}`}><Button variant="contained" color="success" size='small' startIcon={<EditSharpIcon />} className="btn btn-success m-2" >UPDATE</Button ></Link>
                    <Button type='button' variant="contained" color="error" className="btn btn-danger m-2" size='small' startIcon={<DeleteIcon />} onClick={() => handleDelete(item)} > Delete  </Button >
                  </td><hr style={{ width: '20px' }} />
                  <th className="table-danger" >{availableRoomNumbers[index] || '-'} </th>
                </tr>
              ))}
            </tbody >
          </table>
        </div>
        <br />

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <HSView SelectUser={SelectUser} availableRooms={availableRoomNumbers} Close={handleClose} />
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
              <HSDelete data={data} setData={setData} SelectUser={SelectUser} Deletes={handleDeletes} />
            </Box>
          </Modal>
        </div>

        <div>
          {filteredData.length === 0 && (
            <div className="alert alert-warning">
              No results found for "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </>
  )
}
