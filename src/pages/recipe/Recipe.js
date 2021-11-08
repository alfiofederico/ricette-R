import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

import Footer from "../../components/Footer";

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url =
    "https://my-json-server.typicode.com/alfiofederico/f-server/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url)
  const { mode } = useTheme()
    const { color } = useTheme();

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cooking.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>ing</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
        {/* <Footer style={{ background: color }} /> */}
    </div>
  );
}