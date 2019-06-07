import React, { Component } from 'react';
import axios from 'axios'
class ArtistForm extends Component {
    
        state =
        {
            info: {
                name: '',
                photo_url: '',
                nationality: ''
            }
        }
    
    
    
    
        handleChange = (event) => {
            
            const newInfo = { ...this.state.info }
            
    
            newInfo[event.target.name] = event.target.value
            this.setState({info: newInfo })
            
        }
    
        handleSubmit=(event)=>{
            event.preventDefault()
            console.log("tryig itsubm")
            const newInfo = this.state.info
            console.log(newInfo)
            axios.post(`/api/v1/artists/`, newInfo)
            .then(()=>{this.props.fetchArtist()})
        }


        render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" onChange={this.handleChange}/> 
                    <input name="photo_url" onChange={this.handleChange} />
                    <input name="nationality" onChange={this.handleChange} />
                    <button type="submit"> ADD</button>
                </form>
            </div>
        );
    }
}

export default ArtistForm;