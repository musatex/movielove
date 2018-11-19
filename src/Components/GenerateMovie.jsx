import  React  from  'react';
//import "./GenerateE.css"

const  GenerateMovie = ({ selectMovie }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectMovie}>Movie</button>
        </div>
    );
};

export  default  GenerateMovie;
