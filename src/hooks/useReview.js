import { useEffect, useState } from "react";

export const useReview = ()=>{
    const [reviews, setReview] = useState([]);
    useEffect(()=>{
        fetch('fackdata.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return [reviews, setReview]
};
