import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import { useTheme } from "../../hooks/useTheme";
import Footer from '../../components/Footer';

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch(
    "https://my-json-server.typicode.com/alfiofederico/f-server/recipes"
  );
  const { color } = useTheme();

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}    
       {/* <Footer style={{ background: color }} /> */}      
    </div>
  );
}
