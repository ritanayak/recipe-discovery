import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
    const { data, loading, error} = useFetch ("https://www.themealdb.com/api/json/v1/1/categories.php");

    if (loading) return <Spinner/>; // Show spinner while loading
    if (error) return <ErrorMessage message={error} />; //Show error if API fails

    return (
        <div className="grid">
            {data.categories.map((cat) => (
                <Link key={cat.idCategory} to={`/category/${cat.strCategory}`}>
                <h3>{cat.strCategory}</h3>
                <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                </Link>
            ))}
        </div>
    );
}