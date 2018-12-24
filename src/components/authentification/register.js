import React , {Component} from'react'
class Register extends Component {
    render(){
        return(
            <div class="register">
            <div class="container">
              <div class="row">
                <div class="col-md-8 m-auto">
                  <h1 class="display-4 text-center">INSCRIPTION</h1>
            
                  <form action="create-profile.html">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Pseudo" name="name" required />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Prénom" name="name" required />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Nom" name="name" required />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Adresse e-mail" name="name" required />
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control form-control-lg" placeholder="Institution" name="email" />
                      <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    </div>
                    
                    <div class="form-group">
                      <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" />
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
                    </div>
                    <input type="submit" class="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Register ;