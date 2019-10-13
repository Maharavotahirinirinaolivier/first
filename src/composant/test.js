import React, { Component } from 'react';

class Test extends Component {
    
  state={
    profil: [],
    nouveauInfo:""
  }

           handleSubmit=(event)=>{
            event.preventDefault();

            const id=this.state.profil.id;
            const nom=this.state.nouveauInfo;
            const client={id: id, nom: nom};

            const info = this.state.profil.slice();
            info.push(client);

            this.setState({profil: info, nouveauInfo:""});

          }


          handleChange = (event) => {
          const value=event.currentTarget.value;
          this.setState({nouveauInfo: value});    
          } 

    render() {
        return (
            <div>
                 
                              
                  <form onSubmit={this.handleSubmit}>
                    <strong>Nom: <input value={this.state.nouveauInfo} onChange={this.handleChange} type="text" /></strong>  
                    <button>Ajouter</button>
                  </form> 
                  {this.state.profil.map(
                            client=>(
                            <div>
                            
                            <h1>{client.nom}</h1>
                             
                            </div>
                            
                          ))}      
            </div>
        );
    }
}

export default Test;