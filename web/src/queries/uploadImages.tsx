// // uploadImages.js
import toast from "react-hot-toast";
import fetchWrapper from "../helper/fetchWrapper";

export default async function uploadImage(files: any, cafeId: number) {
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

    formData.append("ref", "api::study-spot.study-spot");
    formData.append("refId", `${cafeId}`);
    formData.append("field", "images");

    const imageResp = await fetchWrapper({
      endpoint: "upload",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      },
    });

    if (imageResp.error) {
      toast.error(`${imageResp.error.error}`);
      return;
    }
  } catch (error) {
    console.error(error);
  }
}
