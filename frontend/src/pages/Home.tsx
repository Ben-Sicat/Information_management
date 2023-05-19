import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components/index';
import { Grid, Typography, Container, Card, CardHeader, CardContent, Button, Box, Divider, Modal, TextField, CardActions } from '@mui/material';
import LogoSVG from '../assets/LOGOBIG.svg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config'; // Replace with your Firebase Firestore configuration import
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Home: React.FC = () => {
  const ModContainer = styled('div')`
    position: relative;
    height: 100vh;
  `;

  const BodyContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px 10px 120px 10px;
    gap: 4rem;
  `;

  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'announcements'), (snapshot) => {
      const announcementsData: Announcement[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Announcement),
      }));
      setAnnouncements(announcementsData);
    });

    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddAnnouncement = async () => {
    try {
      const date = new Date().toISOString();
      const announcementWithDate = { ...newAnnouncement, date };
      
      // Copy the announcement to the archive collection
      await addDoc(collection(db, 'archive'), announcementWithDate);

      // Add the announcement to the announcements collection
      await addDoc(collection(db, 'announcements'), announcementWithDate);

      console.log('Announcement added successfully');
      handleCloseModal();
    } catch (error) {
      console.error('Error adding announcement:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAnnouncement((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleDeleteAnnouncement = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'announcements', id));
      console.log('Announcement deleted successfully');
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  return (
    <>
      <Navbar burger={false} updateSearchTerm={(term: string) => {}} />
      <ModContainer>
        <BodyContainer>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Box sx={{
              marginTop: '8.5rem',
              width: '50%'
            }}>
              <Typography variant="h1" color="var(--secondary-color)">BARANGGAY 670 ZONE 72</Typography>
            </Box>
            <Box>
              <img src={LogoSVG} alt="LOGO" />
            </Box>
          </Box>

          <Box sx={{ marginTop: '-3rem' }}>
            <Button variant="outlined" style={{
              position: 'absolute',
              left: '19.5rem',
              height: '3.5rem',
              width: '18rem',
              fontWeight: 700,
              fontSize: '1.2rem',
              borderRadius: '30rem',
              border: '5px solid',
              borderColor: 'var(--tertiary-color)'
            }}>ABOUT US</Button>
          </Box>

          <Typography variant="h5" color="var(--secondary-color)" sx={{ marginBottom: 5 }}>
            ANNOUNCEMENTS | EVENTS
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8}>
              {announcements.length > 0 && (
                <Card sx={{ borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', width: '100%' }}>
                  <CardHeader subheader={announcements[0].date} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {announcements[0].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {announcements[0].content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {isLoggedIn && (
                      <Button size="small" color="primary" onClick={() => handleDeleteAnnouncement(announcements[0].id)}>
                        Delete
                      </Button>
                    )}
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              )}
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {announcements.slice(1, 6).map((announcement) => (
                  <Grid item xs={12} sm={6} key={announcement.id}>
                    <Card sx={{ borderRadius: '10%', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', width: '100%' }}>
                      <CardHeader subheader={announcement.date} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {announcement.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {announcement.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {isLoggedIn && (
                          <Button size="small" color="primary" onClick={() => handleDeleteAnnouncement(announcement.id)}>
                            Delete
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Container>
            {/* Replace with your login logic */}
            {isLoggedIn && (
              <Box marginTop="2rem">
                <Button variant="contained" onClick={handleOpenModal}>
                  Add Announcement
                </Button>
              </Box>
            )}
          </Container>
        </BodyContainer>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" gutterBottom>
              Add Announcement
            </Typography>
            <TextField
              name="title"
              label="Title"
              fullWidth
              margin="normal"
              value={newAnnouncement.title || ''}
              onChange={handleInputChange}
            />
            <TextField
              name="content"
              label="Content"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={newAnnouncement.content || ''}
              onChange={handleInputChange}
            />
            <Button variant="contained" onClick={handleAddAnnouncement}>
              Submit
            </Button>
          </Box>
        </Modal>

        <Footer />
      </ModContainer>
    </>
  );
}

export default Home;
