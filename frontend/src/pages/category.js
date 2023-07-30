import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import SectionMain from "../components/Section";

export const CategoryItems = createContext();

const Category = () => {
    // hooks
    const [ data, setData ] = useState("");
    const catName = useParams("catName");

    // handle data
    useEffect(() => {

        const fetchData = async (e) => {
            const result = await axios({
                url: `https://shop-v1.onrender.com/display/items-department/${ catName.catName }`,
                method: `get`
            });
            setData(result.data);
        }
        fetchData();
    }, [ catName ]);

    return (
        <CategoryItems.Provider value = { data }>
            <div className="cat-page pages container">
                <SectionMain />
            </div>
        </CategoryItems.Provider>
    )
}

export default Category;