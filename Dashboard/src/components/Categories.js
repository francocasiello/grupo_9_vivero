import React, {Component} from 'react';
import CategoriesList from './CategoriesList';

class Categories extends Component{
    constructor(){
        super();
        this.state = {
            products : [] //estado inicial
			
        }

    }

    componentDidMount(){
        fetch('/api/products/')
        .then(response => {
            return response.json()
        })
        .then(products =>{

            this.setState({
                products: products.meta.countByCategory
            })
        })
    }

	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-white text-center font-weight-bold"> Cantidad de productos por categoria:</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4 bg-gradient-dark">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-striped table-dark table-hover text-white" id="dataTable" width="100%" cellspacing="0">
									<thead className = "table-dark">
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Total de Productos</th>
                                        
										</tr>
									</thead>
									
									<tbody>
									{
                                    this.state.products.map((product, index)=>{
                                        return  <CategoriesList  {...product}  key={product + index} />
                                    })
                                	}
										
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	}
}
export default Categories;