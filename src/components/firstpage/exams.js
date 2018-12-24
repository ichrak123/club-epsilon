import React , {Component} from 'react'

class Exams extends Component {
    render(){
        return(
            <div className ="devoir">
            <div class="row">
            <div class="col-sm-6">
              <div class="card">
              <h5 class="card-title">Devoirs corrigés</h5>
                <div class="card-body">
                  <br/>
                  <p class="card-text">Vous en avez marre de travailler avec photocopies illisibles qui ne donnent pas envie de travailler? L’équipe de Club Epsilon a retapé des dizaines de devoirs ainsi que leurs corrigés pour vous permettre de travailler en toute sérénité.
Nous avons choisi de retaper uniquement les devoirs officiels d’algèbre et d’analyse de différentes institutions tunisiennes.
Les corrigés sont vérifiés par des professeurs qualifiés.
L’accès aux devoirs est gratuit et se fait à travers un outil de recherche simple et efficace lié à une base de données de documents.
Nous travaillons constamment sur l’amélioration de notre base de documents et nous vous invitons à y participer</p><br/>
             
                </div>
                <a href="#" class=" btdevoir button btn btn-primary">Acceder au devoirs</a>
              </div>
             
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <img data-toggle="modal" data-target="#myModal" className = "image" src="http://www.clubepsilon.net/wp-content/uploads/2018/08/devoir_sale.jpg"/>

          
                  <img data-toggle="modal" data-target="#myModalone" className = "image" src="http://www.clubepsilon.net/wp-content/uploads/2018/08/devoir_propre.jpg"/>
                
                </div>
                
<div class="modal fade" id="myModal">
<div class="modal-dialog">
<div class="modal-content">

<div class="modal-body">

<img src ="http://www.clubepsilon.net/wp-content/uploads/2018/08/devoir_sale.jpg"/>
</div>

</div>
</div>
</div>
<div class="modal fade" id="myModalone">
<div class="modal-dialog">
<div class="modal-content">

<div class="modal-body">

<img src ="http://www.clubepsilon.net/wp-content/uploads/2018/08/devoir_propre.jpg"/>
</div>

</div>
</div>
</div>

              </div>
              
            </div>
          </div>
          </div>
          
        )

       
    }
}
export default Exams 