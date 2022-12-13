import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { city } from '../../data/city';

const AddProduct = ({ setOpenAdd }) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageProduct, setImageProduct] = useState(null);
    const [cityData, setCityData] = useState('');
    const [uploadingImageProduct, setUploadingImageProduct] = useState(false)
    const [previewImageProduct, setPreviewImageProduct] = useState(false)
    const validateImageProduct = async (e) => {
        const fileProduct = e.target.files[0];
        if (fileProduct.size >= 1048576) {
            return alert("Max Size for Image is 1MB");
        } else {
            setImageProduct(fileProduct);
            setPreviewImageProduct(URL.createObjectURL(fileProduct));
        }
    }
    const uploadImageProduct = async () => {
        const dataProduct = new FormData();
        dataProduct.append("file", imageProduct);
        dataProduct.append("upload_preset", "isywxhbb");
        dataProduct.append("cloud_name", "dbxn9aa2i");
        try {
            setUploadingImageProduct(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/dbxn9aa2i/image/upload", {
                method: "post",
                body: dataProduct
            });
            const urlDataProduct = await res.json();
            setUploadingImageProduct(false);
            return urlDataProduct.url;

        } catch (error) {

            setUploadingImageProduct(false);
            console.log(error);

        }
    }
    const handlerAddProduct = async (e) => {
        e.preventDefault();
        if (!name || !link || !category || !description || !price || !imageProduct) {
            return alert("Please fill all fields!");
        }
        // if (!imageProduct) {
        //     return alert("Please select Product Image");
        // }
        const url = await uploadImageProduct(imageProduct);
        console.log(url);
        try {
            const { data } = await axios.post("/api/products/add", {
                name,

                category,
                description,
                price,
                link,
                city: cityData,
                image: url,
                sellerId: userInfo._id,
                seller: userInfo.name,
                sellerImage: userInfo.image
            });
            console.log(data);
            alert("You have successfully added Product!");
            navigate('/account');
            setOpenAdd(false);


        } catch (error) {

            console.log("Error!");
            alert("Add failed, please try again!");
        }
    }

    return (
        <div className='passwords'>
            <form className="" onSubmit={handlerAddProduct}>
                <div className='form-group-container'>
                    <div>
                        <div className="close-form" onClick={() => setOpenAdd(false)}>X</div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input required type="text" id='category' onChange={(e) => setCategory(e.target.value)} value={category} />
                        </div>


                        <div className="form-group form-image product">
                            <img src={previewImageProduct || "https://res.cloudinary.com/YOUR_NAME/image/upload/v1655630421/universa_ocbphf.png"} alt="" />
                            <label htmlFor="image_upload_product" style={{ position: "relative" }}>
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </label>
                            <input type="file" hidden id='image_upload_product' accept='image/png, image/jpeg' onChange={validateImageProduct} />

                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea required type="text" rows='10' cols='55' id='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price(฿)</label>
                            <input required type="text" id='price' onChange={(e) => setPrice(e.target.value)} value={price} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price"> City  </label>
                            <select name="" id="" onChange={(e) => { setCityData(e.target.value) }}>
                                <option value=""> Select City </option>
                                {
                                    city?.map((el, index) => {
                                        return <option key={index} value={el}>{el}</option>
                                    })
                                }
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Link</label>
                            <input required type="text" id='link' onChange={(e) => setLink(e.target.value)} value={link} />
                        </div>

                    </div>
                </div>




                <div className="form-btn">
                    <button type='submit'><FontAwesomeIcon icon={faPlusCircle} />{uploadingImageProduct ? "Saving..." : "Save Product"}</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
