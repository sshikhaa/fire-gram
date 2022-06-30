

//we'll use useState and useEffect hooks
import { Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectStorage , projectFirestore,timestamp } from "../firebase/config";

const useStorage = (file) => {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    useEffect(() => {
        //getting a ref to where the file should be saved
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed' , (snap) => {
            //perecentage of upload completed
            let perecentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(perecentage);
        } , (err) => {
            setError(err);
        } ,async ()=>{
            //this last para will be fired when uploading will be completed(setting the url after complete upload)
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url , createdAt });
            setUrl(url);
        })
    } , [file])
    //useEffect will fire whenever file changes

    return { progress , url , error }

}

export default useStorage;
