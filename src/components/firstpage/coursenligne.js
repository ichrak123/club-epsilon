import React , {Component} from 'react'
class OnlineCours extends Component {
    
    render() {
        return(
            <div className = "hello">
            <h1 className ="title">COURS PARTICULIERS</h1>
           
   <div class="row"> 
  
   <div class="col-12 col-md-6 image-non-padder">
  
            <div class="imgone-front-cover">
                <h5>Séances présentielles</h5>
                <p>Petits groupes & suivi personnalisé</p>
                <a href="cours-particuliers" class="btn btn-primary btn-xl rounded-pill">Plus de détails</a>
            </div>
      
   </div>
   <div class="col-12 col-md-6 image-non-padder">
            
            <div class="imgtow-front-cover">
                <h5>Séances en ligne</h5>
                <p>Résumé de cours et correction d'excercices</p>
                <a href="cours-particuliers" class="btn btn-primary btn-xl rounded-pill">Plus de détails</a>
            </div>
      
   </div>
    </div></div>

            

        )
    }
}
export default OnlineCours
