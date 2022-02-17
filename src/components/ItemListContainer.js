import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {db} from '../utils/firebaseConfig';
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);  
    const dataParam = useParams();
    
    useEffect(() => {       
        const firestoreFetch = async () => {
            let queryData;
            if (dataParam.categoryId) {
                queryData = query(collection(db, "Products"), where('category', '==', parseInt(dataParam.categoryId)));
            } else {
                queryData = query(collection(db, "Products"), orderBy('name'));
            }

            const querySnapshot = await getDocs(queryData);
            const dataFirebase = querySnapshot.docs.map( itemp => ({
                    id: itemp.id,
                    ...itemp.data()
                })
            )
            return dataFirebase;    
        }

        firestoreFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
    }, [dataParam]);

    useEffect(() => {
        return (() => {
            setProductos([]);
        })
    }, []);
    
    return(
        <>
        <div>
            <ItemList productos={productos}/> 
        </div>    
        </>
    )
}

export default ItemListContainer;