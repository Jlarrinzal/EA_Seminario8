import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    units: number;
}

function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('http://localhost:9090/products')
        .then((result) => setProducts(result.data))
        .catch((err) => console.log(err))
    }, [] )

    // const handleDelete = (_id: string) => {
    //     axios.delete(`http://localhost:9090/products/${_id}`)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add + </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Units</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(products) && products.map((product, index) => (
    <tr key={index}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.units}</td>
        <td>
            {/* <Link to={`/update/${product._id}`} className='btn btn-success'>Update</Link>
            <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button> */}
        </td>
    </tr>
))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;