import { Link } from "react-router-dom";
import amazonLogo from "../../assets/logo/amazon-black-logo.png";
import useInputState from "../../hooks/hookForm";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const { formData, error, setError, handleInputChange, handleInputBlur } =
    useInputState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const { createUser, isLoading, setLoading } = useContext(AuthContext);

  const handleRegister = async (e) => {
    setError({});
    e.preventDefault();
    const form = e.target;

    if (formData.password !== formData.confirmPassword) {
      setError({
        ...error,
        passwordError: "Oops! The passwords you entered don't match.",
      });
      return;
    }

    try {
      const userCredential = await createUser(
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log(user);
      toast.success("Your account has been created successfully.", {
        theme: "colored",
        hideProgressBar: true,
      });
      form.reset();
      setLoading(false);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        theme: "colored",
        hideProgressBar: true,
      });
      form.reset();
      setLoading(false);
      console.error(errorMessage);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="max-w-[380px] mx-auto -mt-12">
        <div className="flex justify-center">
          <img className="w-28" src={amazonLogo} alt="" />
        </div>
        <div className="border shadow-sm p-5 rounded-lg">
          <h2 className="text-2xl font-medium mb-5">Create Account</h2>
          <form onSubmit={handleRegister}>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text font-medium">Your name</span>
              </div>
              <input
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputBlur(e, {
                    errorMessage:
                      "Name cannot be empty and should only contain letters.",
                    regex: /^[A-Za-zÀ-ÿ' -]+$/,
                  })
                }
                name="name"
                required
                autoFocus
                type="text"
                placeholder="First and last name"
                className="input h-11 input-bordered outline-none w-full"
              />
              {error?.nameErrorMessage && (
                <p className="text-red-500 text-xs mt-2 flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>

                  <span>{error.nameErrorMessage}</span>
                </p>
              )}
            </label>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text font-medium">Email</span>
              </div>
              <input
                onChange={handleInputChange}
                onBlur={(e) =>
                  handleInputBlur(e, {
                    errorMessage: "Please Enter a Valid Email Address",
                  })
                }
                name="email"
                required
                placeholder="Email"
                type="email"
                className="input h-11 input-bordered outline-none w-full"
              />
              {error?.emailErrorMessage && (
                <p className="text-red-500 text-xs mt-2 flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>

                  <span>{error.emailErrorMessage}</span>
                </p>
              )}
            </label>
            <label className="form-control w-full mb-3">
              <div className="label">
                <span className="label-text font-medium">Password</span>
              </div>
              <input
                onBlur={(e) =>
                  handleInputBlur(e, {
                    errorMessage:
                      "Password must be 6+ characters, with a symbol, uppercase, lowercase, and a number.",
                    regex:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                  })
                }
                onChange={handleInputChange}
                name="password"
                required
                type="password"
                placeholder="At least 6 characters"
                className="input h-11 input-bordered outline-none w-full"
              />
              {error?.passwordErrorMessage && (
                <p className="text-red-500 text-xs mt-2 flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>

                  <span>{error.passwordErrorMessage}</span>
                </p>
              )}
            </label>
            <label className="form-control w-full mb-5">
              <div className="label">
                <span className="label-text font-medium">
                  Re-enter password
                </span>
              </div>
              <input
                onChange={handleInputChange}
                name="confirmPassword"
                required
                type="password"
                className="input h-11 input-bordered outline-none w-full"
              />
              {error?.passwordError && (
                <p className="text-red-500 text-xs mt-2 flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>

                  <span>{error.passwordError}</span>
                </p>
              )}
            </label>
            <button className="btn btn-warning w-full">
              {isLoading && (
                <span className="loading loading-spinner loading-sm"></span>
              )}{" "}
              Continue
            </button>
          </form>
          <p className="text-xs mt-7 leading-relaxed mb-4">
            By creating an account, you agree to Amazon's{" "}
            <Link className="text-[#0066c0]" to="#">
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link className="text-[#0066c0]" to="#">
              privacy Notice
            </Link>{" "}
            .
          </p>
          <hr />

          <h3 className="mt-4 font-medium text-base">Buying for work?</h3>
          <Link className="text-[#0066c0] text-sm mb-4 block" to="#">
            Create a free business account
          </Link>
          <hr />
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <Link className="text-[#0066c0]" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
