import React from 'react';

function ProductsList(props){
    return(
        <React.Fragment>
            <tr >
				<td>{props.id}</td>
				<td>{props.name}</td>
				<td>{props.description}</td>
                <td>$ {props.price}</td>
                {/*<!-- <td>{props.categoria_id.name}</td>-->*/}

			</tr>
        </React.Fragment>
    )
}
export default ProductsList;