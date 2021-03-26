import React from 'react'
import "./Header.css"; 
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import InputBase from '@material-ui/core/InputBase'; 


const searchBarTheme = createMuiTheme({
    props : { 
        MuiInputBase: { 
            placeholder: "Search Task For Your Next Task!",
            autoComplete: "hello",
        },
    },


});
          

function Header() {
    return (
        <div className="header">
            <IconButton > 
                <Link to='/' style={{textDecoration: 'none'} }> 
                    <div className="logo">
                        Tasks4Cash $$$
                    </div>
                    {/* create logo soon */}
                </Link>
               
            </IconButton>
            <ThemeProvider theme={searchBarTheme}> 
                <InputBase className="searchBar" > 
                    {/* this needs to be changed to have functionallity; 
                        potentiall we can get rid of theme provider and 
                        using inputbase and move to a html searchbar */}
                </InputBase> 
            </ThemeProvider>
            
            <div className="menu"> 
                <IconButton> 
                    <MessageIcon fontSize="large" className="messagesIcon"/>
                </IconButton>
                <IconButton> 
                    <PersonIcon fontSize="large" className="personIcon"/> 
                </IconButton>
            
            </div> 


        </div>
    )
}

export default Header
