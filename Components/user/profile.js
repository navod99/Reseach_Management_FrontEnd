import { Card, CardContent, Typography, CardMedia, Button, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { deepOrange, deepPurple, indigo } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Link, useParams, useNavigate } from 'react-router-dom'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SupDashboard from '../../DashBords/SupDashboard';
import StudentDashboard from '../../DashBords/StudentDashboard';
import axios from 'axios';
import Footer from '../Footer';
import LogoutIcon from '@mui/icons-material/Logout';

const profile = () => {
  const det = sessionStorage.getItem("user")
  const userRole = useParams('userRole')
  const navigate = useNavigate();
  console.log(userRole.userRole)
  console.log(det)
  const [user, setUser] = useState([])
  useEffect(() => {
    if (userRole.userRole == 'student') {
      axios.get(`http://localhost:5001/user/${det}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))


    } else if (userRole.userRole == 'staff') {
      axios.get(`http://localhost:5001/staff/${det}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }
  }, [])

  sessionStorage.setItem("userdet", JSON.stringify(user))
  console.log(user)

  return (
    <>
      <Card sx={{ display: 'flex', bgcolor: indigo[600] }}>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 90, marginLeft: 2, marginTop: 2 }}>N</Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" color="white" >
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
              {user.regNo}
            </Typography>
            <Typography variant="subtitle1" color="white" component="div">
              {user.groupId}
            </Typography>
          </CardContent>
        </Box>
        <Button variant='contained' startIcon={<LogoutIcon />} style={{ position: 'absolute', right: 20, top: 20 }} onClick={() => { sessionStorage.removeItem('user'); navigate('/') }}>Logout</Button>

      </Card>

      <StudentDashboard />
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  )
}

export default profile