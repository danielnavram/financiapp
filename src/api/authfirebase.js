import { AUTH } from "./config";

export function register({ email, name, password, photo }) {
  return AUTH.createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      sendEmailVerify(user);
      user
        .updateProfile({
          displayName: name,
        })
        .then(() => ({
          status: "success",
          title: "Profile Updated",
          message: `Your profile was updated successfully. Remember to currently update your personal info`,
        }))
        .catch((err) => ({
          status: "error",
          message: err.message,
          title: err.code,
        }));
      return {
        status: "success",
        title: "Successfully Sign Up",
        message: `Your account was created. Only need to verify your account for enjoy the APP`,
      };
    })
    .catch((err) => ({
      status: "error",
      message: err.message,
      title: err.code,
    }));
}

export async function login(email, password) {
  return await AUTH.signInWithEmailAndPassword(email, password)
    .then((res) => {
      if (res.user.emailVerified)
        return {
          ...res,
          title: `Welcome ${res.user.displayName}`,
          message: "You have been logged in correctly.",
          status: "success",
        };
      return {
        ...res,
        status: "warning",
        title: "Account Not Activated",
        message:
          "Your account has not yet been activated. Please go check your email and active it to enjoy the APP",
      };
    })
    .catch((err) => {
      return { ...err, status: "error" };
    });
}

export async function sendEmailVerify(user) {
  return await user
    .sendEmailVerification()
    .then(() => ({
      status: "success",
      title: "Email Verification",
      message: `Please go to check your email: ${user.email} and activate your account for enjoy this awesome APP`,
    }))
    .catch((err) => ({
      status: "error",
      message: err.message,
      title: err.code,
    }));
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
      return {
        status: "success",
        title: "Password Recovery",
        message: `The recovery password email has been sent to ${email}`,
      };
    })
    .catch((err) => ({
      status: "error",
      message: err.message,
      title: err.code,
    }));
}

export function logout() {
  AUTH.signOut().catch((err) => console.log("err-logout", err.message));
}
