import React from "react";
import "./App.css";
import { Container, Button, Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <Container>
      <h1>Material UI</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Grid container spacing={3}>
        <Grid item xs="6">
          <Paper>Hi</Paper>
        </Grid>
        <Grid item xs>
          <Paper>Hello</Paper>
        </Grid>
        <Grid item xs>
          <Paper>What's good</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
