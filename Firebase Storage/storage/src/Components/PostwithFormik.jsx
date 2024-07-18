import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../Services/firebase";
let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};

const postdataschema = Yup.object({
  title: Yup.string().required("Title is mandatory"),
  description: Yup.string().required("Description is mandatory"),
  price: Yup.number().min(500).required("Price is mandatory"),
  image: Yup.string().required("Imgage is mandatory"),
  category: Yup.string().required("Category is mandatory"),
});

const PostwithFormik = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialstate,
    validationSchema: postdataschema,
    onSubmit: (formdata) => {
      console.log(formdata);
      postdata(formdata);
    },
  });
  const { title, image, price, description, category } = values;
  console.log(errors);

  const postdata = async (formdata) => {
    try {
      const res = await addDoc(collection(db, "Product"), formdata);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Post with Formik</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={image}
          name="image"
          placeholder="Image..."
        />
        {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
        <br />
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={price}
          name="price"
          placeholder="price"
        />
        {errors.price ? <p style={{ color: "red" }}>{errors.price}</p> : null}
        <br />
        <br />
        <select value={category} name="category" onChange={handleChange}>
          <option value="" hidden>
            Category
          </option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        {errors.category ? (
          <p style={{ color: "red" }}>{errors.category}</p>
        ) : null}
        <br />
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={description}
          name="description"
          placeholder="description"
        />
        {errors.description ? (
          <p style={{ color: "red" }}>{errors.description}</p>
        ) : null}
        <br />
        <br />
        <input
          type="text"
          onChange={handleChange}
          value={title}
          name="title"
          placeholder="title"
        />
        {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostwithFormik;
