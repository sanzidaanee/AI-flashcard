'use client'
import React from 'react';
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection,doc,getDoc,getDocs } from "firebase/firestore"
import { db } from "@/firebase"


import { useSearchParams } from "next/navigation"
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Box,
    Typography,
    
    } from "@mui/material"

    export default function Flashcard() {
        const { isLoaded, isSignedIn, user } = useUser()
        const [flashcards, setFlashcards] = useState([])
        const [flipped, setFlipped] = useState({})
    
        const searchParams = useSearchParams()
        const search = searchParams.get('id')
        useEffect(() => {
            async function getFlashcard() {
                if (!search || !user) return
            
                const colRef = collection(doc(collection(db, 'users'), user.id), search)
                const docs = await getDocs(colRef)
                const flashcards = []
                docs.forEach((doc) => {
                    flashcards.push({ id: doc.id, ...doc.data() })
                })
                setFlashcards(flashcards)
                }
                getFlashcard()
            }, [search, user])
    
            const handleCardClick = (id) => {
                setFlipped((prev) => ({
                ...prev,
                [id]: !prev[id],
                }))
            }

    
        return (
            <Container maxWidth="md">
              <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardActionArea 
                      onClick={() => {
                        handleCardClick(index)
                      }}
                      >

                        <CardContent>
                          <Box sx={{
                            perspective: '1000px',
                            '$ > div': {
                                transition: 'transform 0.6s',
                                transformStyle: 'preserve-3d',
                                position: 'relative'
                            }
                          }}>
                            <div>
                              <div>
                                <Typography variant="h5" component="div">
                                  {flashcard.front}
                                </Typography>
                              </div>
                              <div>
                                <Typography variant="h5" component="div">
                                  {flashcard.back}
                                </Typography>
                              </div>
                            </div>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )
        }
