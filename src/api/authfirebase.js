import { AUTH } from "./config";

export async function register(email, name, password) {
  return await AUTH.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const userRegistered = AUTH.currentUser();
      // here i'm able to add photo and name
      userRegistered
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          // Update success
        })
        .catch((err) => console.log(err.message));
    })
    .catch((error) => {
      // Handle Errors here.
      return error;
    });
}

export async function login(email, password) {
  return await AUTH.signInWithEmailAndPassword(email, password).catch(
    (error) => {
      // Handle Errors here.
      return error;
    }
  );
}

export async function authentication() {
  return await AUTH.onAuthStateChanged((user) => {
    return user;
  });
}

async function sendEmailVerify() {
  return await AUTH.currentUser()
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
    .then(() => {
      console.log("success-logout", "You have been log out");
    })
    .catch((err) => console.log("err-logout", err.message));
}
