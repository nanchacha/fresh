import price from './data.js'

export default function Cart() {
    return (
      <div >
        <h1 className="title">Cart</h1>

        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    )
  }
  

  function CartItem(){
    return(
        <div className="cart-item">
          <p>상품명</p>
          <p>{'$' + price}</p>
          <p>1개</p>  
        </div>
    )
  }