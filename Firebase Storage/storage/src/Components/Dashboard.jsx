/* eslint-disable no-undef */
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../Services/firebase";
import { useEffect, useState } from "react";
let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [formdata, setFormdata] = useState(initialstate);
  const [id, setId] = useState(0);
  const { image, price, description, category, title } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  // const fatchdatafromfirestore = () => {
  //   getDocs(collection(db, "Product"))
  //     .then((res) => {
  //       let filetrdata = res.docs.map((el) => ({ ...el.data(), id: el.id }));
  //       console.log(filetrdata);
  //       setProduct(filetrdata);
  //     })

  //     .catch((err) => console.log(err));
  // };

  const fatchdatafromfirestore = async () => {
    try {
      const datafromdb = await getDocs(collection(db, "Product"));
      // console.log(datafromdb);
      if (datafromdb) {
        let filetrdata = datafromdb.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));
        // console.log(filetrdata);
        setProduct(filetrdata);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Product", id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSingledata = async (id) => {
    setId(id);
    try {
      let res = await getDoc(doc(db, "Product", id));
      let filterdata = res.data();
      setFormdata(filterdata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    console.log(id);
    try {
      await updateDoc(doc(db, "Product", id), formdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchdatafromfirestore();
  }, [product]);

  return (
    <div>
      <h1>Dashbord</h1>

      <hr />
      <h1>Update Form</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={image}
          name="image"
          placeholder="Image..."
        />
        <br />

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={price}
          name="price"
          placeholder="price"
        />
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

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={description}
          name="description"
          placeholder="description"
        />
        <br />

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={title}
          name="title"
          placeholder="title"
        />
        <br />

        <input type="submit" />
      </form>

      <hr />
      <h1 style={{ textAlign: "center" }}>Product</h1>
      {product.length > 0 &&
        product.map((el) => (
          <div
            key={el.id}
            style={{
              border: "2px solid teal",
              marginBottom: "20px",
              width: "300px",
              margin: "auto",
            }}
          >
            <img src={el.image} height={200} width={300} />
            <p style={{ textAlign: "center" }}>Price : {el.price}/-</p>
            <br />
            <div>
              <button
                onClick={() => handleDelete(el.id)}
                style={{ marginLeft: "100px" }}
              >
                Delete
              </button>
              <button
                style={{ margin: "5px" }}
                onClick={() => handleGetSingledata(el.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Dashboard;
