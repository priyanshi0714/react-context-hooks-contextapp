import React,{createContext,Component } from 'react';

//making context
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
    //inside state we have the data we want to share to different component 

    state = { 
        isLightTheme : true,
        light : { syntax:'#555', ui :'#ddd', bg: 'eee'},
        dark :{ syntax : '#ddd', ui : '#333' , bg : '#555'}

     }
     toggleTheme = () => {
         this.setState({ isLightTheme : !this.state.isLightTheme});
     }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}



 
export default ThemeContextProvider;