import { faPlusCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { city } from '../../data/city';

const EditProduct = ({setOpenEdit, pro}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [name, setName] = useState(pro.name);
    
    const [category, setCategory] = useState(pro.category);
    const [description, setDescription] = useState(pro.description);
    const [price, setPrice] = useState(pro.price);
    const [cityData,setCityData]=useState(pro.city);
    const [link,setLink]=useState(pro.link);
    const [imageProduct, setImageProduct] = useState(null);
    const [uploadingImageProduct, setUploadingImageProduct] = useState(false)
    const [previewImageProduct, setPreviewImageProduct] = useState(pro.image)
const [upload,setUpload]=useState(false);
    const validateImageProduct = async (e) => {
        const fileProduct = e.target.files[0];
        if(fileProduct.size >= 1048576) {
            return alert("Max Size for Image is 1MB");
        } else {
            setImageProduct(fileProduct);
            setUpload(true);
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

    const handlerUpdateProduct = async (e) => {
        e.preventDefault();
        //if is not set new images, if exists image
        if(!upload) {
            try {
                const {data} = await axios.put("/api/products/update", {
                    _id: pro._id,
                    name,
                  
                    category,
                    description,
                    price,
                    city: cityData,
                    link,
                    image: previewImageProduct, 
                    sellerId: userInfo._id,
                    seller: userInfo.name,
                    sellerImage: userInfo.image
                });
                console.log(data);
                alert("You have successfully updated Product!");
                navigate('/account');
                setOpenEdit(false);
    
    
            } catch(error) {
    
                console.log("Error!");
                alert("Updated failed, please try again!");
            }
            //if set new image, than set url link for new image
        } else {

            const url = await uploadImageProduct(imageProduct);
            console.log(url);

            try {
                const {data} = await axios.put("/api/products/update", {
                    _id: pro._id,
                    name,
                  
                    category,
                    description,
                    price,
                    city: cityData,
                    link,
                    image: url, 
                    sellerId: userInfo._id,
                    seller: userInfo.name,
                    sellerImage: userInfo.image
                });
                console.log(data);
                alert("You have successfully updated Product!");
                navigate('/account');
                setOpenEdit(false);
    
    
            } catch(error) {
    
                console.log("Error!");
                alert("Updated failed, please try again!");
            }

        }

        const url = await uploadImageProduct(imageProduct);
        console.log(url);

        
    }

  return (
    <div>
      <div className='passwords'>
            <form className="" onSubmit={handlerUpdateProduct}>
                <div className='form-group-container'>
                <div>
                <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
               
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input required type="text" id='category' onChange={(e) => setCategory(e.target.value)} value={category} />
                </div>
                <div className="form-group form-image product">
                    <img src={previewImageProduct } alt="" />
                    <label htmlFor="image_upload_product">
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </label>
                    <input type="file" hidden id='image_upload_product' accept='image/png, image/jpeg' onChange={validateImageProduct} />
                    
                </div>
                </div>
                <div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input required type="text" id='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input required type="text" id='price' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="price"> City  </label>
                  <select value={cityData} name="" id="" onChange={(e)=>{ setCityData(e.target.value)  }}>
                    <option value =""> Select City </option>
                 {
                    city?.map((el,index) => {
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
    </div>
  )
}

export default EditProduct
