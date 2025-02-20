import { useNavigate, useParams } from "react-router-dom"
import { useGetCategoryByIdQuery } from "../../redux/services/categoryApi"

const CategoryDetails = () => {

  const {id} = useParams()
  const nav = useNavigate()

  const {data: category, isError, isLoading} = useGetCategoryByIdQuery(id)
  
  const handleGoBack = ()=>{
    nav("/")
  }

  if(isLoading){
    return (<p className="flex justify-center">LOADING...</p>)
  }
  if(isError){
    return (<p className="flex justify-center">Some error occured!</p>)
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
      Name: {category.name}
      </div>
      <div>
        <button onClick={handleGoBack} className="cursor-pointer border-1 p-2">Go Back</button>
      </div>
    </div>
  )
}

export default CategoryDetails