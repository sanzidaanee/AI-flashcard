import Image from "next/image";
import getStripe from '../utils/get-stripe';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {Container, Typography} from '@mui/material';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


 
  
export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch(`/api/checkout_session`, {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000'},
    })

  const checkoutSessionJson = await checkoutSession.json()
  
  const stripe = await getStripe()
  const {error} = await stripe.redirectToCheckout({
    sessionId: checkoutSessionJson.id,
  })

  if (error) {
    console.warn(error.message)
  }

  }


  
  return (
    <Container maxWidth= "100vw">
      <Head>
        <title>Flashcard SaaS </title>
        <meta name="description" content="Create flashcard from your text"/>

      </Head>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
            </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in"> Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>


        </ToolBar>

      </AppBar>

      <Box sx={{
        textAlign:"center", 
        my: 4,
      }}>
        <Typography variant="h2" gutterBottom> AI Flashcard </Typography>
        <Typography variant="h5" gutterBottom>
          {''}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" gutterBottom>
          Features
          </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
          <Typography>
            {''}
            Simply input your text and let our software do the rest.

          </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Smart Flashcard</Typography>
          <Typography>
            {''}
            Our AI intelligently breaks down your text into consice flashcards.
          </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Acceible Anywhere</Typography>
          <Typography>
            {''}
            Access your flashcards from any device, at any time.

          </Typography>
          </Grid>
          </Grid>
          </Box>
          <Box sx={{my: 6, 
            textAlign: 'center'
            }}>
            <Typography variant="h4" gutterBottom>Pricing</Typography>

            <Grid container spacing={6}
            
             justifyContent="center" 
             alignItems="center"  
             sx={{ height: '50vh' }}  
           
            >
              <Grid item xs={12} md={4}>
                <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'green.300',
                  borderRadius: 2,
                }}>
                <Typography variant="h5" gutterBottom>
                  Basic
                  </Typography>
                <Typography variant="h6" gutterBottom>
                  Free
                  </Typography>
                <Typography>
                {''}
                Access to basic flashcard features and limited storage
                </Typography>
                <Button variant = "contained" color="primary" sx={{mt: 2}} onClick={handleSubmit}>
            Choose basic
          </Button>
          </Box>
          </Grid>
          </Grid>
               
          <Grid container spacing={6}
            
             justifyContent="center" 
             alignItems="center"  
             sx={{ height: '50vh' }}  
           
            >
              <Grid item xs={12} md={4}>
                <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'green.300',
                  borderRadius: 2,
                  textAlign:"center",
                }}>
                <Typography variant="h5" gutterBottom>
                  Pro
                  </Typography>
                <Typography variant="h6" gutterBottom>
                  $5/ month
                  </Typography>
                <Typography>
                {''}
                Unlimited access and storage
                </Typography>
                <Button variant = "contained" color="primary" sx={{mt: 2}}>
            Choose Pro
          </Button>
          </Box>
          </Grid>
          </Grid>
          
          <Grid container spacing={6}
            
             justifyContent="center" 
             alignItems="center"  
             sx={{ height: '50vh' }}  
           
            >
              <Grid item xs={12} md={4}>
                <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'green.300',
                  borderRadius: 2,
                }}>
                <Typography variant="h5" gutterBottom>Advance</Typography>
                <Typography variant="h6" gutterBottom>$10 / month</Typography>
                <Typography>
                {''}
                Lifetime access and all storages
                </Typography>
                <Button variant = "contained" color="primary" sx={{mt: 2}}>
            Choose Advance
          </Button>
          </Box>
          </Grid>
          </Grid>         
          </Box>
    </Container>
    
  );
}


