import React, {Component} from 'react'
import Landing from './landing.js'
import About from './about.js'
import Exams from './exams.js'
import Onlinecours from './coursenligne.js'




class Firstpage extends Component {
    render() {
        return (
            <div>
<Landing />
<About/>
<Exams/>
<Onlinecours/>


</div>
            
        )
    }
}
export default Firstpage ; 