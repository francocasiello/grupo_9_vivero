import React, {useRef, Component} from 'react';


import imageProduct from '../assets/images/ficus.jpg';

import ContentRowMovies from './ContentRowMovies';

class ContentRowTop extends Component{
    constructor(){
        super();
        this.state = {
            products : [], //estado inicial
			lastProduct: {},
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
                products: products.detalles.pop(),
				lastProduct: products.detalles.at(-1) /*<!-- trae el ultimo producto-->*/
				
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
									<h5 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">El último producto en la base de datos es:</h5>
									<br/>
									<h4 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">{this.state.products.name}</h4>
								</div>
								<div className="card-body  bg-dark">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {this.state.products.image} alt=" Star Wars - Mandalorian "/>
									</div>
									<p className="text-white " >{this.state.products.description}</p>
									<p className="text-white " >{this.state.products.price}</p>
									<a className="btn btn-success btn-center" target="_blank" rel="nofollow" href="/">Agregar Carrito</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4 ">
								<div className="card-header py-3  bg-gradient-success">
									{/*<h5 onMouseOver={ () => cambiarColor("cursada que ya culmina")}*/}
									<h5 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">El último usuario en la base de datos es:</h5>
									<br/>
									<h4 /* onMouseOver={ cambiarColor} */ className="m-0 font-weight-bold text-white">{this.state.user.name}</h4>
								</div>
								<div className="card-body  bg-dark">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4 .img-responsive" style={{width: 40 +'rem'}} src={this.state.user.avatar} alt=" Star Wars - Mandalorian "/>
									</div>
									<p className="text-white" >{this.state.user.name}</p>
									<p className="text-white" >{this.state.user.email}</p>
									<a className="btn btn-success" target="_blank" rel="nofollow" href="/">Log In</a>
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