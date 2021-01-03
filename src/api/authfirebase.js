import { AUTH } from "./config";

export function register({ email, name, password, photo }) {
  AUTH.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      sendEmailVerify(user);
      user
        .updateProfile({
          displayName: name,
          photoURL: photo.url,
        })
        .then((res) => {
          console.log("succes-update", res);
        })
        .catch((err) => console.log(err.message));
    })
    .catch((error) => {
      // Handle Errors here.
      return error;
    });
}

export async function login(email, password) {
  return await AUTH.signInWithEmailAndPassword(email, password)
    .then((res) => ({ ...res, status: "success" }))
    .catch((err) => {
      return { ...err, status: "error" };
    });
}

export async function sendEmailVerify(user) {
  return await user
    .sendEmailVerification()
    .then(() => {
      console.log("success-email", "OK");
    })
    .catch((err) => console.log("error", err.message));
}

export async function updateUser(data) {
  return await AUTH.currentUser()
    .updateProfile(data)
    .then(
      () => {
        console.log("success", "Updated");
      },
      (error) => console.log(error.message)
    );
}

export async function resetPassword(email) {
  return await AUTH.sendPasswordResetEmail(email)
    .then(() => {
      console.log("succes-reset", "The email has been sent");
    })
    .catch((err) => console.log("err-reset", err.message));
}

export function logout() {
  AUTH.signOut()
    
    .catch((err) => console.log("err-logout", err.message));
}
