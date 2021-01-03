import { STORAGE, STORAGEREF } from "api/config";

export const uploadProfileImage = (userId, file) => {
  return STORAGEREF.child(`profile_pictures/${userId}/${file.name}`)
    .put(file)
    .then((res) =>
      STORAGEREF.child(res.metadata.fullPath)
        .getDownloadURL()
        .then((url) => console.log("Descargar", url))
        .catch((err) => console.log("error", err.message))
    )
    .catch((err) => console.log("error", err.message));
};
