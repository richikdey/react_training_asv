import React from 'react';
import Nav from './Nav';
import './App.css';
import {items} from './static-data'
import ItemPage from './ItemPage';
import CartPage from './CartPage';
class App extends React.Component {

  state = {
    activeTab: 0,
    cart: [],
    price:0
  };

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  }
  
  handleAddToCart = item =>{
     this.setState({
      cart: [...this.state.cart, item.id]
     })
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
    cart: [
    ...this.state.cart.slice(0, index),
    ...this.state.cart.slice(index + 1)
    ]
    });
    }

  renderContent=()=> {
    switch(this.state.activeTab){
      case 0: return (
       <ItemPage items={items} 
        onAddToCart={this.handleAddToCart}
        />)
      case 1: return this.renderCart();
    }
  }

  // addCartItem = ( item, price ) =>{
  //   if( this.state.cart.id === item.id ){
  //       this.setState({
  //         price:price
  //       })
  //   }

  // }
  
  // calTotal = (itemId, itemCounts) =>{
  //  // console.log("in calTotal" + (itemId+1))
       
  //     // if( oneitem.id === (itemId+1) ){
        
  // //    }
  //     // console.log(returnedPrice) ;
  //    }
  
  renderCart = () =>{
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
      }, {});
      
      let cartItems = Object.keys(itemCounts).map(itemId => {
     // this.calTotal(itemId,itemCounts);  
      var item = items.find(item =>
      item.id === parseInt(itemId, 10)
      );
      return {
        ...item,
        count: itemCounts[itemId]
      }
      });
      let price =  Object.keys(itemCounts).map(item => {
          console.log("items" , this.state.cart)    
      })
      
      

      return (
        <CartPage items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne} 
        //totalCalc = {this.calTotal}
        />
        );
    }

  render() {
    return (
      <div className="App">
      {/* activeTab={activeTab} */}
        <Nav onTabChange={this.handleTabChange}/>
        <main className="App-content">
        {this.state.cart.length} items
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
