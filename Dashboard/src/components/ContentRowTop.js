import React, {useRef, Component} from 'react';

{/*<!-- import imageProduct from '../assets/images/`${this.state.products.image} -->*/}
{/*<!-- No se como hacer para que esa imagen sea variable -->*/}
import imageProduct from '../assets/images/ficus.jpg';

import ContentRowMovies from './ContentRowMovies';

class ContentRowTop extends Component{
    constructor(){
        super();
        this.state = {
            products : [], //estado inicial
			user: []
        }

    }

    componentDidMount(){
        fetch('/api/products/')
        .then(response => {
            return response.json()
        })
        .then(products =>{

            this.setState({
				
                products: products.detalles.pop()
            })
        }) 
		fetch('/api/users/')
        .then(response => {
            return response.json()
        })
        .then(users =>{

            this.setState({
                user: users.users.pop()
            })
        })
    }



	render(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4 ">
								<div className="card-header py-3  bg-gradient-success">
									{/*<h5 onMouseOver={ () => cambiarColor("cursada que ya culmina")}*/}
									<h5 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">El último producto en la base de datos es: {this.state.products.name}</h5>
								</div>
								<div className="card-body  bg-dark">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {imageProduct} alt=" Star Wars - Mandalorian "/>
									</div>
									<p className="text-white" >{this.state.products.description}</p>
									<a className="btn btn-success" target="_blank" rel="nofollow" href="/">Ver Detalles</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4 ">
								<div className="card-header py-3  bg-gradient-success">
									{/*<h5 onMouseOver={ () => cambiarColor("cursada que ya culmina")}*/}
									<h5 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">El último usuario en la base de datos es: {this.state.user.name}</h5>
								</div>
								<div className="card-body  bg-dark">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.products.image} alt=" Star Wars - Mandalorian "/>
									</div>
									<p className="text-white" >{this.state.user.email}</p>
									<a className="btn btn-success" target="_blank" rel="nofollow" href="/">Ver Detalles</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						
					</div>
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
}

export default ContentRowTop;