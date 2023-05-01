
import price from '../cart/data.js'


export default function List(){

    let itemList = ['Tomato', 'Apple', 'Pasta']

    return(
        <div>
            
            <h1 className="title"> 상품목록 </h1>
            {
                itemList.map((item, order)=>{
                    return (
                        
                        <div className="food" key={order}>
                        <img src = {'/'+item+'.jpg'} className="food-img"/>
                        <h4> {item} {'$'+price}</h4>
                        </div>            
                    )
                })
            }
        </div>
    )
}