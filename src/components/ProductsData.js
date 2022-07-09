import { useState } from "react"

const Products = [
{
    id: 1,
    name: "ipa",
    price: 160,
    image: "https://gobar.vteximg.com.br/arquivos/ids/157473-1000-1000/Andes-Origen-IPA.jpg?v=637218864324070000"
},
{
    id: 2,
    name: "vodka",
    price: 1000,
    image: "https://jumboargentina.vtexassets.com/arquivos/ids/687342/Vodka-Absolut-700ml-1-884184.jpg?v=637795965695630000"
},
{
    id: 3,
    name: "fernet",
    price: 900,
    image: "https://www.brancastore.com.ar/143-thickbox_default/fernet-branca-1000ml.jpg"
},

]

/*function Productos () {
    const [products, setUsers] = useState([
{ id: 1, name: 'cerveza'},
{id: 2, name: 'vodka'},
    ])
    return <ul>
        {products.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>

}*/