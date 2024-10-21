import { Link } from "react-router-dom";
import amazonLogo from "../../assets/logo/amazon-black-logo.png";
import useInputState from "../../hooks/hookForm";

const Signup = () => {
  const nameState = useInputState();
  const emailState = useInputState();
  const passwordState = useInputState();
  const reEnterPasswordState = useInputState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState.value);
    console.log(emailState.value);
    console.log(passwordState.value);
    console.log(reEnterPasswordState.value);
  }

  return (
    <div className="max-w-[380px] mx-auto mt-12">
      <div className="flex justify-center">
        <img className="w-28" src={amazonLogo} alt="" />
      </div>
      <div className="border shadow-sm p-5 rounded-lg">
        <h2 className="text-2xl font-medium mb-5">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text font-medium">Your name</span>
            </div>
            <input
              {...nameState}
              type="text"
              placeholder="First and last name"
              className="input h-11 input-bordered outline-none w-full"
            />
          </label>
          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text font-medium">Email</span>
            </div>
            <input
              {...emailState}
              type="email"
              className="input h-11 input-bordered outline-none w-full"
            />
          </label>
          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text font-medium">Password</span>
            </div>
            <input
              {...passwordState}
              type="password"
              placeholder="At least 6 characters"
              className="input h-11 input-bordered outline-none w-full"
            />
          </label>
          <label className="form-control w-full mb-5">
            <div className="label">
              <span className="label-text font-medium">Re-enter password</span>
            </div>
            <input
              {...reEnterPasswordState}
              type="password"
              className="input h-11 input-bordered outline-none w-full"
            />
          </label>
          <button className="btn btn-warning w-full">Continue</button>
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
  );
};

export default Signup;
