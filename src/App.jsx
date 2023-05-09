import * as React from "react"
import "./style.css"
// import ProductList from "./components/ProductList/ProductList"
// import TaskList from "./components/TaskList/TaskList"

export default function App() {

    const productList = [
        {
            id: 1,
            name: "Coca cola",
            quantity: 1
        },
        {
            id: 2,
            name: "Coffee",
            quantity: 5
        },
        {
            id: 3,
            name: "Milk",
            quantity: 2
        }
    ]

    const taskList = [
      {
          id: 1,
          name: "Clean bedroom",
          finished: false
      },
      {
          id: 2,
          name: "Wash Car",
          finished: false
      },
      {
          id: 3,
          name: "Mop floor",
          finished: false
      }
  ]

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {productList.map((product)=> 
                (<> 
                    <li>Product: {product.name} / {product.quantity} pz left</li>
                </>)
                
                 )} 
            </ul>
            <ProductList productList={productList} />
            <TaskList taskList={taskList} />
        </div>
    )
}

function ProductList ({ productList }) {
  return (
    <div>
      {productList.map(({ name }) => (
        <p> {name} </p>
      ))}
    </div>
  )
}
function TaskList ({ taskList }) {
  return (
    <div>
      {taskList.map(({ name }) => (
        <p> {name} </p>
      ))}
    </div>
  )
}