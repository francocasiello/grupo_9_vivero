import React from 'react';

function CategoriesList(props){
    return(
        <React.Fragment>
            <tr >
				<td>{props.id}</td>
				<td>{props.name}</td>
				<td>{props.cant}</td>
        
			</tr>
        </React.Fragment>
    )
}
export default CategoriesList;