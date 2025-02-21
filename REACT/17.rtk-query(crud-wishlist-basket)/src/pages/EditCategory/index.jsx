import { useEffect, useState } from "react"
import { useAddNewCategoryMutation, useEditCategoryMutation, useGetCategoryByIdQuery } from "../../redux/services/categoryApi"
import { useNavigate, useParams } from "react-router-dom"

const EditCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const { id } = useParams()

  const { data, error, isLoading } = useGetCategoryByIdQuery(id)
  const [editCategory] = useEditCategoryMutation()
  // console.log(data);

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     await editCategory({id, category})
      nav("/")
    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    setCategory({
      name: data?.name,
      description: data?.description,
    })
  }, [data])
  // if(isLoading){
  //   return <p>LOADING...</p>
  // }


  return (
    <div className="container mx-auto">
      <h3>Add Category</h3>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="name" className="border-2"
          value={category.name}
          onChange={(e) => {
            setCategory({ ...category, name: e.target.value })
          }} />
        <input type="text" placeholder="description" className="border-2"
          value={category.description}
          onChange={(e) => {
            setCategory({ ...category, description: e.target.value })
          }} />
        <button type="submit" className="border-2 px-3">Edit</button>
      </form>
    </div>
  )
}

export default EditCategory