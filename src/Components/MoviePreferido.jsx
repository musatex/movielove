import React, { Component } from "react";
import "./MoviePreferido.css";

class MoviePreferido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "movieName",
      poster: "adressesMovie",
      comment: "commentaire"
    };
    //this.onChange = this.onChange.bind(this);
    //this.submitForm = this.submitForm.bind(this);
  }
  //Pour envoyer les données
  onChangeMovie = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };
  onChangeAdresses = e => {
    console.log(e.target.value);
    this.setState({
      poster: e.target.value
    });
  };
  onChangeCommentaire = e => {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value
    });
  };
  submitForm = e => {
    alert("Mon film préféré est:" + this.state.name);
    e.preventDefault();

    const url = "http://92.175.11.66:3001/api/quests/movies/";
    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    
    // Récupération du name Movie via Fetch
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec succès ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un film");
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Mon film préféré</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Quel est ton film préféré?</legend>
            <div className="form-data">
              <label htmlFor="name">Nom du Film</label>
              <input
                type="text"
                placeholder="Jerry Mcguirre"
                id="name"
                name="name"
                onChange={this.onChangeMovie}
                //onChange={e => this.change(e)} //et ça reemplace tous les onChange ds les inputs
                value={this.state.name}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Link Film</label>
              <input
                type="text"
                placeholder="allocine.fr"
                id="poster"
                name="poster"
                onChange={this.onChangeAdresses}
                //a reemplacer pour onChange={e => this.change(e)}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="commentaire">Pourquoi tu aimes ce film?</label>
              <textarea
                type="text"
                //placeholder="C'est super!" //ça ne mrche pas pour les texteareas
                id="comment"
                name="comment"
                onChange={this.onChangeCommentaire}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MoviePreferido;
