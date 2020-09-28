import { AUTH, DB } from "./config";

export async function register(email, password) {
  return await AUTH.createUserWithEmailAndPassword(email, password).catch(
    (error) => {
      // Handle Errors here.
      return error;
    }
  );
}

export function login(email, password) {
  return AUTH.signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    return error;
  });
}

export async function authentication() {
  await AUTH.onAuthStateChanged((user) => {
    return user;
  });
}

export function logout() {
  AUTH.signOut();
}
