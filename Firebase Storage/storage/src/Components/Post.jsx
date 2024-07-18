import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Services/firebase";

let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};
const Post = () => {
  const [formdata, setFormdata] = useState(initialstate);

  const { image, price, description, category, title } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const postdata = async () => {
    try {
      const res = await addDoc(collection(db, "Product"), formdata);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //   addDoc(collection(db, "Product"), formdata)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    postdata();
  };

  return (
    <div>
      <h1>Post Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={image}
          name="image"
          placeholder="Image..."
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={price}
          name="price"
          placeholder="title"
        />
        <br />
        <br />
        <select
          value={category}
          name="category"
          onChange={(e) => handleChange(e)}
        >
          <option value="" hidden>
            Category
          </option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={description}
          name="description"
          placeholder="description"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={title}
          name="title"
          placeholder="price"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Post;
