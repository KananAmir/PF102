import { useState } from "react"
import { useAddNewCategoryMutation } from "../../redux/services/categoryApi"

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const [addCategory] = useAddNewCategoryMutation()

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(category.name && category.description){
      await addCategory(category)
    }else{
      window.alert("fill all inputs!")
    }
    
  }
  return (
    <div className="container mx-auto">
      <h3>Add Category</h3>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="name" className="border-2"
        value={category.name}
        onChange={(e)=>{
          setCategory({...category, name: e.target.value})
          
        }}/>
        <input type="text" placeholder="description" className="border-2" 
        value={category.description}
        onChange={(e)=>{
          setCategory({...category, description: e.target.value})
        }}/>
        <button type="submit" className="border-2 px-3">Add</button>
      </form>
    </div>
  )
}

export default AddCategory