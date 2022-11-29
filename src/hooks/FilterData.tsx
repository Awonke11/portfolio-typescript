import {db} from "../firebase/firebase";
import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import demo from "../asserts/demo.jpg";
import personal from "../asserts/personal.png";
import salesmall from "../asserts/salesmall.png";
import milton from "../asserts/milton.png";

interface Data {
    title: string,
    description: string,
    figmaLink: string,
    liveLink: string,
    githubLink: string,
    features: string[],
    tools: string[],
    img: string
}

export const useFilter = (item: string) => {
    const [filteredData, setFilteredData] = useState<Data>()

    const dataRef = collection(db, "projects");
    useEffect(() => {
        getDocs(dataRef).then(res => {
            const data = res.docs.map(d => d.data());
            data.map(d => {
                if (d.id === item) {
                    let image = "";
                    if (d.id === "milton") {
                        image = milton
                    } else if (d.id === "personal") {
                        image = personal
                    } else if (d.id === "salesmall") {
                        image = salesmall
                    } else {
                        image = demo
                    }
                    setFilteredData(
                        {
                            title: d.title,
                            description: d.description,
                            figmaLink: d.figma,
                            liveLink: d.live,
                            githubLink: d.github,
                            features: d.features,
                            tools: d.tools,
                            img: image
                        }
                    )
                }
            });
        }).catch(error => {
            console.log(error.message);
        })
    }, [item])

    return {filteredData}
}