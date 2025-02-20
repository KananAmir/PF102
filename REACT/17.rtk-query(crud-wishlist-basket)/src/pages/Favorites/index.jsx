import { useDispatch, useSelector } from "react-redux"
import { toggleFavorites } from "../../redux/features/favoritesSlice";

const Favorites = () => {

  const favorites = useSelector((state)=>state.favorites.items)
  console.log(favorites);
  const dispatch = useDispatch()
  if(favorites.length === 0){
    return (<p>no item in favorites!</p>)
  }
  return (
    <div className="container mx-auto">
      <ul>
      {
        favorites.map((q)=>{
         return <li key={q.id}>{q.name} <button className="border-2 bg-orange-300 px-3 py-1 cursor-pointer" onClick={()=>{
          dispatch(toggleFavorites(q))
         }}>remove</button></li>
        })
      }
      </ul>
   
    </div>
  )
}

export default Favorites