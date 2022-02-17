import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {db} from '../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});  
    const [isLoading, setLoading] = useState(false);
    const dataParam = useParams();
    
    useEffect(() => {       
        const firestoreFetch = async () => {
            const docRef = doc(db, "Products", dataParam.itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: dataParam.itemId,
                    ...docSnap.data()
                }
            }    
        }

        firestoreFetch()
            .then(setLoading(true))
            .then(respuesta => setProducto(respuesta))
            .catch(err => console.log(err))
    }, []); 

    return (
        <>
            {
                isLoading ? 
                <ItemDetail producto={producto}/>
                : <img style={{width:"200px", height:"200px"}} src="../Loader.gif" alt="Wait"/>            
            }
        </>
    );
}

export default ItemDetailContainer;
