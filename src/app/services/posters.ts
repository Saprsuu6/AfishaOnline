import axiosInstance from './axiosInstance';

const postersService = {
  addPostersMediaToTebi: async (images: File[], ownerPassword = 'saprsuu625524') => {
    try {
      const formData = new FormData();

      // Adding each image to the form data
      images.forEach((image) => {
        formData.append(`image`, image); // key should match what the API expects
      });

      // Adding the OWNER_PASSWORD field
      formData.append('OWNER_PASSWORD', ownerPassword);

      const response = await axiosInstance.post('/uploadImgToTebiIo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        return {
          success: true,
          message: 'Images uploaded successfully!',
          data: response.data
        };
      } else {
        return {
          success: false,
          message: 'Failed to upload images!'
        };
      }
    } catch (error) {
      console.error('Error during image upload:', error);
      return {
        success: false,
        message: 'An error occurred during image upload. Please try again.'
      };
    }
  }
};

export default postersService;
