import React from "react";
import "./App.css";
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: {
    padding: "8px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Material UI
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit facilis beatae pariatur, unde tempora neque ullam
              saepe, corporis at odit distinctio cum impedit ut, quaerat quo
              soluta nihil! Et.
            </Typography>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>What's good</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
