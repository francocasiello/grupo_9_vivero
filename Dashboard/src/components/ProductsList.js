import React from 'react';

function ProductsList(props){
    return(
        <React.Fragment>
            <tr >
				<td>{props.id}</td>
				<td>{props.name}</td>
				<td>{props.description}</td>
                <td>{props.price}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductsList;