import React from 'react'

export const HomeComponent = (props) => {
  return (
    <div>
        <div class="card" style={{width:"18rem"}}>
            <img class="card-img-top" src="../img.png" alt="Bijora Chutney"></img>
            <div class="card-body">
                <h5 class="card-title">Bijora Chutney</h5>
                <p class="card-text">40rs.</p>
                <button onClick={() => props.addToCartHandler({productName:"Bijora Chutney",productPrice:40})}>ADD</button>
            </div>
        </div>
    </div>
  )
}
