import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import {useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    // // LOGICA DEL ASYNCMOCK
    // useEffect (() => {
    //     getProductById(itemId)
    //     .then(response => {
    //         setProduct(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // },[itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} /> 
        </div>
    )
}

export default ItemDetailContainer