import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  fetchByID,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../redux/categorySlice/category.slice";

const Categories = () => {
  const { categories, loading, category } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [editCategory, setEditCategory] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createCategory(newCategory));
    setNewCategory({ name: "", description: "" });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCategory({ id: editCategory.id, category: editCategory }));
    setEditCategory({ id: "", name: "", description: "" });
  };

  return (
    <div>
      <h1>Categories</h1>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
        <button type="submit">Add Category</button>
      </form>

      {loading && <p>Loading...</p>}
      {/* {error && <p>{error}</p>} */}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}, {category.description}
            <button onClick={() => dispatch(fetchByID(category.id))}>
              Details
            </button>
            <button
              onClick={() => {
                setEditCategory({
                  id: category.id,
                  name: category.name,
                  description: category.description,
                });
              }}
            >
              Edit
            </button>
            <button onClick={() => dispatch(deleteCategory(category.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editCategory.id && (
        <form onSubmit={handleUpdate}>
          <h2>Edit Category</h2>
          <input
            type="text"
            placeholder="Name"
            value={editCategory.name}
            onChange={(e) =>
              setEditCategory({ ...editCategory, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={editCategory.description}
            onChange={(e) =>
              setEditCategory({ ...editCategory, description: e.target.value })
            }
          />
          <button type="submit">Update Category</button>
        </form>
      )}

      {category && (
        <div>
          <h2>Category Details</h2>
          <p>Name: {category.name}</p>
          <p>Description: {category.description}</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
