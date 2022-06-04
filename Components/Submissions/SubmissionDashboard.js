import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer';

const SubmissionDashboard = () => {
    const [types, setTypes] = useState([])
    var d = new Date();

    useEffect(() => {
        function getSubmission() {
            axios.get("http://localhost:5001/submissionType").then((res) => {
                setTypes(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getSubmission()
        console.log(d, "lolll")
    }, [])

    return (
        <div>
            <Header />
            {types.map((type, index) => (
                    <Card sx={{ maxWidth: 1400, marginTop: 5, mx: 8, backgroundColor: '#607d8b' }}>
                        <CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {type.submissionType}
                                </Typography>
                                <Typography marginTop={1} variant="h6" >
                                    {type.specialMessage}
                                </Typography>
                                <Typography marginTop={1} marginLeft={1} >
                                    {type.description}
                                </Typography>
                                <Link style={{ textDecoration: 'none' }} to={`/submission/${type._id}`}>
                                    <Button variant='contained'>
                                        View
                                    </Button>
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            ))}
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Footer />
            </div>
        </div>
    )
}

export default SubmissionDashboard