
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const ChatComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    setLoading(true);
    setResponse('');
    try {
      const response = await fetch('http://127.0.0.1:8000/stream_chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (reader) {
        const readStream = async () => {
          let done = false;
          while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            if (value) {
              setResponse((prev) => prev + decoder.decode(value));
            }
          }
          setLoading(false);
        };
        readStream();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth={false}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Chat with GPT-4o
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ overflowY: 'auto', maxHeight: '600px', padding: '10px' }}>
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
              {response}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={10}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={handleMessageChange}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            disabled={loading}
            fullWidth
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatComponent;