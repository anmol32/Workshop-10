// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save'

// function App( ){
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <Button 
//                 startIcon={<SaveIcon/>}
//                 size="large"
//                 variant="contained"
//                 color="secondary">
//                 Hey Anmol!
//                 </Button>
//             <img src={logo} className="App-logo" alt="logo" />
//             </header>
//         </div>
//     );
// }

// export default App;
import "./App.css";
import {  
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Header from "./components/Header";
import { featuredPosts, sidebar } from "./Data/Data";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;