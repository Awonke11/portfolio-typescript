import {db} from "../firebase/firebase";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";

interface Data {
    id: string,
    title: string,
    description: string,
    figmaLink: string,
    liveLink: string,
    githubLink: string,
    features: string[],
    tools: string[]
}

export const useFetch = () => {
    const [data, setData] = useState<Data[]>([])
    const [error, setError] = useState<string>("")

    const dataRef = collection(db, "projects");
    useEffect(() => {
        getDocs(dataRef).then(res => {
            const data = res.docs.map(d => d.data());
            data.map(d => {
                setData(prev => [...prev,
                    {
                        id: d.id,
                        title: d.title,
                        description: d.description,
                        figmaLink: d.figma,
                        liveLink: d.live,
                        githubLink: d.github,
                        features: d.features,
                        tools: d.tools
                    }
                ]);
            });
        }).catch(error => {
            setError(`${error.message}}`)
        })
    }, [])

    return {data, error}
}