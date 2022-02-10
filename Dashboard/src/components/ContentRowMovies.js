import React, {Component} from 'react';
import SmallCard from './SmallCard';

class ContentRowTop extends Component{
    
       constructor(){
        super();
        this.state = {
            products : [], //estado inicial
            users: [],
            categories: []
        }

    }

   
    componentDidMount(){
        fetch('/api/users/')
        .then(response => {
            return response.json()
        })
        .then(users =>{

            this.setState({
                users: users.count.total
            })
        })

        fetch('/api/products/')
        .then(response => {
            return response.json()
        })
        .then(products =>{

            this.setState({
                products: products.meta.count
            })
        })

        fetch('/api/products/')
        .then(response => {
            return response.json()
        })
        .then(categories =>{

            this.setState({
                categories: categories.meta.countByCategory.length
            })
        })
    }
    

    render(){
        let productInDataBase = {
            color:   "success",
            titulo: "Productos en la Base de Datos",
            valor: this.state.products,
            icono: "fa-solid fa-seedling",
        }
        
        let amount ={
            color:   "success",
            titulo: "Usuarios en la Base de Datos",
            valor: this.state.users,
            icono: "fa-solid fa-user",
        }
        
        let user = {
            color:   "success",
            titulo: "Categorias en la Base de Datos",
            valor: this.state.categories,
            icono: "fa-solid fa-table",
        }
        
        let cardProps = [productInDataBase,amount,user];

        return(
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
}


export default ContentRowTop;