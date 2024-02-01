// // uploadImages.js
import fetchWrapper from "../helper/fetchWrapper";

type imagerepsType = [
  item: {
    id: number;
  }
];

export default async function uploadImage(files: any) {
  try {
    if (!files || files.length === 0) {
      console.error("No files selected.");
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const myBlob = new Blob([file], { type: file.type });
      formData.append("files", myBlob, file.name);
    }

    const imageResp = await fetchWrapper({
      endpoint: "upload",
      options: {
        method: "POST",
        data: formData,
      },
    });

    // returns the id of the uploaded image inside an array

    const imageIds =
      (imageResp?.data as imagerepsType)?.map((item) => item.id) || [];

    return imageIds;
  } catch (error) {
    console.error(error);
  }
}
