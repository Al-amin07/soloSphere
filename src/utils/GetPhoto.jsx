import axios from "axios";

const GetPhoto = async (photo) => {
  console.log(photo);
  const formData = new FormData();
  formData.append("photo", photo);
  console.log(formData)
  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=3991881fd60599f453130cedf1b9d89c`,
      formData
    );
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
};

export default GetPhoto;
