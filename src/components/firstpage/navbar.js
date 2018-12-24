import React , {Component} from 'react'
import {Link} from 'react-router-dom'
class Navbar extends  Component {
    render(){
        return(
            <div>
                <div className="background">
            <nav class="navbar navbar-expand-sm navbar-dark bg-light mb-4">
            <div class="container">
              <a class="navbar-brand" href="landing.html"><img src="http://www.clubepsilon.net/wp-content/themes/club-epsilon/assets/img/logo.png"/></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span class="navbar-toggler-icon"></span>
              </button>
             
        
              <div class="collapse navbar-collapse" id="mobile-nav">
              
        
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link-dark" to="/register">connexion</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link-dark" to="/login">inscription</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>

            <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div class="containertow">
             
        
              <div class="collapse navbar-collapse" id="mobile-nav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="profiles.html">
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/firstpage"> acceuil
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#about.html"> a propos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="profiles.html"> cours particuliers
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/coursenligne"> cours en ligne
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="profiles.html"> devoirs corrigés
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="profiles.html"> contact
                    </a>
                  </li>

                </ul>
        
    
              </div>
            </div>
          </nav>
          </div>
        )
    }
}
export default Navbar