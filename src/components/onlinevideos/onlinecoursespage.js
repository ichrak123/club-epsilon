import React , {Component} from 'react'

import {Link} from 'react-router-dom'



class Video extends  Component {

    render(){
        return(
            <div className="center">
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1ere année</h5>
    
        <Link to="/videolist" class="btn btn-primary">Analyse</Link>
        <a href="#" class="btn btn-primary">Algébre</a>

      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2éme année</h5>
    
        <a href="#" class="btn btn-primary">Analyse</a>
        <a href="#" class="btn btn-primary">Algébre</a>
        
      </div>
    </div>
  </div>
</div>
</div>
        )}}
       export default Video 