import React, { Component } from 'react';
import Product from './Product';
// import feedback from '../data'
import axios from 'axios'
class ProductList extends Component {
    state = {
       products:[]
    }
    
    componentDidMount=()=>{
        this.getApiData()
            }

            getApiData = () =>{
                axios.get("http://localhost:4444/feedback")
            .then((response) => {
                this.setState({ products: response.data })
            })
        }

    checkVote =(id,flag) =>{
       const updatedprods = this.state.products.map((datas)=>{
         if(id === datas.id){
             if(flag === 1)
             return Object.assign({},datas,{vote:datas.vote+1})
             else if(flag === 0)
             return Object.assign({},datas,{vote:datas.vote-1})
         }else{
             return datas
         }
        })
        this.setState({products: updatedprods})
        console.log(this.state.products)}
    
    render() { 
        const sortedProductState = this.state.products.sort((a,b)=>a.vote-b.vote)
        // console.log(sortedProduct)
        const product = sortedProductState.map((singledata)=>{
            return ( 
                <Product 
                key={singledata.id}
                id={singledata.id}
                title={singledata.title}
                description={singledata.description}
                url={singledata.url}
                imageUrl={singledata.imageUrl}
                avatarUrl={singledata.avatarUrl}
                vote={singledata.vote}
                checkVote={this.checkVote}
                ></Product>
             );
        })
        return ( 
            <div className="ui unstackable items">
            {product}
            </div>
         );
    }
}
 
export default ProductList;