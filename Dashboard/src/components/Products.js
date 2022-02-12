import React, {Component} from 'react';
import ProductsList from './ProductsList';

class Products extends Component{
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
                products: products.detalles
            })
        })
    }

	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-white text-center font-weight-bold">  Todos los productos de la Base de Datos:</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4 bg-gradient-dark">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-striped table-dark table-hover text-white" id="dataTable" width="100%" cellspacing="0">
									<thead className = "table-dark">
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Precio</th>
											<th>Categoria</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Detalles</th>
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.products.map((product, index)=>{
                                        return  <ProductsList  {...product}  key={product + index} />
                                    })
                                	}
										{/* <tr>
											<td>01</td>
											<td>Reto al destino</td>
											<td>20</td>
                                            <td>15</td>
											<td>120</td>
										</tr>
										<tr>
											<td>02</td>
											<td>La caida del halcon negro</td>
											<td>10</td>
											<td>18</td>
											<td>240</td>
										</tr> */}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	}
}
export default Products;