import React , {Component} from 'react'
class About extends Component {
    render() {
        return (
            <div className="container">
            <div class="w3-padding w3-white w3-display-container">
            <span onclick="this.parentElement.style.display='none'" class="w3-button w3-display-topright"><i class="fa fa-remove"></i></span>
            <h2>A propos</h2>
            <div className="paragraphabout">
            <p>Club Epsilon est une plateforme de mathématiques pour les étudiants de prépa en Tunisie.<br/>
Vous y trouverez des devoirs retapés avec leur correction, des vidéos de cours et d’exercices corrigés.<br/>
L’originalité de notre plateforme est qu’elle se focalise sur la compréhension des notions mathématiques abstraites par des outils visuels car voir permet de mieux comprendre.<br/>
La plateforme propose aussi des vidéos d’exercices corrigés qui montrent la méthodologie et la démarche à adopter lors de la résolution d’un exercice.<br/>
Si vous avez besoin d’un suivi plus rapproché, Club Epsilon vous offre aussi des cours particuliers en petits groupes avec un encadrement personnalisé. Il y a aussi la possibilité d’assister à des séances en ligne.<br/>
Club Epsilon est une plateforme interactive. Vous pouvez poser vos questions à tout moment s’il y a un détail dans le cours qui ne vous semble pas très clair ou un exercice qui présente des difficultés.<br/>
Vous pouvez aussi ajouter des devoirs pour enrichir la base de documents existante.</p>
           
            </div>
          </div>
          </div>
        )
            
    }
}
export default About