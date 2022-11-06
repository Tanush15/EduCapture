import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Form = () => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const navigate = useNavigate();


    const [url, setUrl] = useState("");

    const [data, setData] = useState({
      item_description: "",
      item_name: "",
      item_author: "",
      item_tag: "",
      item_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAnY0WIICyaq_C4WrSToewu2aNJdlp629am_b7Dkt61xoe12XB7XBhNTLhMB0kokh948&usqp=CAU",
    });

    let name, value;
    const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setData({ ...data, [name]: value });
    };

    const final = () => {
      postData();
      // navigate("/profile"); 
  
    };

    
  const uploadImage = (e) => {
    console.log(user);
    console.log(data);
    const datat = new FormData()
    datat.append("file", e.target.files[0])
    datat.append("upload_preset", "kllpiwre")
    datat.append("cloud_name","dpwgsbwoi")
    fetch(" https://api.cloudinary.com/v1_1/dpwgsbwoi/image/upload",{
    method:"post",
    body: datat
    })
    .then(resp => resp.json())
    .then(datat => {
    setUrl(datat.url);
    
            setData({ ...data, ["item_image"]: datat.url });
            console.log(data);
    })
    .catch(err => console.log(err))
    }

    const postData = async (e) => {
      const {
        item_description,
        item_name,
        item_author,
        item_tag,
        item_image,
      } = data;
      setData({
        data,
      });
    
      console.log(user);
      
  
      const res = await fetch(`http://localhost:5000/add_data/yashjoshimail@gmail.com`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_description,
          item_name,
          item_author,
          item_tag,
          item_image,
        }),
      });
      const result = await res.json();
      console.log(result);
    
    }
  
  return (
    <div>
      <form>
        <div className="container p-10 m-auto ">
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Model  Name
            </label>
            <input
              name="item_name"
              value={data.item_name}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hello"
              onChange={handleInputs}
              required
            />
          </div>
          <div className="flex">
            <div className="flex-1 pr-2">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Model Author
              </label>
              <input
                type="text"
                name="item_author"
                value={data.item_author}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mention the Item Age in months"
                onChange={handleInputs}
                required
              />
            </div>
          
            <div className="mr-full my-auto">
            <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="item_tag"
                      value={data.item_tag}
                      label="cat"
                      onChange={handleInputs}
                    >
                      <MenuItem value="Stationary">Stationary</MenuItem>
                      <MenuItem value="Sports">Sports</MenuItem>

                      <MenuItem value="Vehicles">
                        Vehicles
                      </MenuItem>
                      <MenuItem value="Archtechture">Archtechture</MenuItem>
                      <MenuItem value="Human">Human Anatomy</MenuItem>
                      <MenuItem value="electronics">Electronics</MenuItem>
                      <MenuItem value="BioTech">Bio Tech</MenuItem>
                      <MenuItem value="Robotics">Robotics</MenuItem>


                    </Select>
                  </FormControl>
                </Box>
              </div>
            
            
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Model Description
            </label>
            <textarea
              name="item_description"
              id="message"
              rows="4"
              value={data.item_description}
              onChange={handleInputs}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
         
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="user_avatar"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              
              onChangeCapture={(e) => uploadImage(e)}
            />
          </div>
          <div className="my-5 text-center">
            <button
              type="submit"
              onClick={final} 
              className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;