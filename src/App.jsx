import React from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: {
    padding: "8px"
  },
  appBar: {
    marginBottom: "16px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Material UI</Typography>
        </Toolbar>
      </AppBar>
      <Container>
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
    </React.Fragment>
  );
}

export default App;
