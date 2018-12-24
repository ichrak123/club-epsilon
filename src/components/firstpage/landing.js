import React , {Component} from 'react'
import {Link} from 'react-router-dom'
 
class Landing extends  Component {
    render(){
        return(
<div class="landing">
    <div class="dark-overlay landing-inner text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-3 mb-4">Club Epsilon
            </h1>
            <p class="lead">Pour vous simplifier les maths en prépa

</p>

            <Link to="/register" class="btn btn-lg btn-info mr-2">inscription gratuite</Link>
         
          </div>
        </div>
      </div>
    </div>
  </div>

        )
    }


}
export default Landing