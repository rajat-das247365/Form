import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowsToEye } from "react-icons/fa6";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
    const [alert,setAlert] = useState("")
    const [showPassword,setShowPassword] = useState()
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toggle =()=>{
    setShowPassword((prev)=> !prev)
  }
  const formChange =(e)=>{
     const {name,value} = e.target;
   
    setForm((prev)=>({
        ...prev,
        [name]:value,
        
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
   
           if (form.password.length < 4) {
        setAlert('Password should be 4 characters !');
        return;
    }
  
      if (!/[!@#$%^&*()]/.test(form.password)) {
        setAlert('Password should contains special characters !');
        return;
    }
        if (!/[A-Z]/.test(form.password)) {
        setAlert('Password should contains uppercase letters !');
        return;
    }
          if (!/[a-z]/.test(form.password)) {
        setAlert('Password should contains lowercase letters !');
        return;
    }
             if (!/[0-9]/.test(form.password)) {
        setAlert('Password should contains numbers !');
        return;
    }
         if (form.password.length!==form.confirmPassword.length) {
        setAlert('Password length does not matches confirm password !');
        return;
    }
   
   
  
       if (form.password!==form.confirmPassword) {
        setAlert('Password does not matches confirm password !');
        return;
    }
    setAlert('')
    setForm({
        fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    })
            toast.success('Account Created Successfully!', {
position: "top-center",
autoClose: 2000,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  };

 return (
  <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex overflow-hidden">

    {/* LEFT SIDE - Decorative Gaming Panel */}
    <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900 relative items-center justify-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.3),transparent_40%)]" />
      
      <h2 className="text-4xl font-extrabold text-white tracking-widest z-10">
        Create Your Account
        <span className="block text-cyan-400 text-lg font-light mt-2">
          Share your artwork and Get projects!
        </span>
      </h2>
    </div>

    {/* RIGHT SIDE - FORM */}
    <form
      onSubmit={submitHandler}
      className="w-full md:w-1/2 p-10 flex flex-col gap-6 text-white"
    >
      <h1 className="text-3xl font-bold tracking-wide text-purple-400">
        Create Account
      </h1>

      {/* Full Name */}
      <input
        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        required
        type="text"
        placeholder="Full name"
        name="fullName"
        value={form.fullName}
        onChange={formChange}
      />

      {/* Email */}
      <input
        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        required
        type="email"
        placeholder="Email address"
        name="email"
        value={form.email}
        onChange={formChange}
      />

      {/* Password */}
      <div className="relative">
        <input
          className={`w-full bg-white/10 border ${
            alert ? "border-red-500" : "border-white/20"
          } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
          required
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={formChange}
        />
        <div
          onClick={toggle}
          className="absolute right-4 top-3 text-xl cursor-pointer text-cyan-400 hover:text-purple-400 transition"
        >
          <FaArrowsToEye />
        </div>
      </div>

      {/* Confirm Password */}
      <input
        className={`bg-white/10 border ${
          alert ? "border-red-500" : "border-white/20"
        } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition`}
        required
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={formChange}
      />

      {/* Alert */}
      {alert && (
        <p className="text-red-400 text-sm animate-pulse">{alert}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 py-3 rounded-lg font-semibold tracking-wide hover:scale-105 transition transform duration-300 shadow-lg shadow-purple-900/50"
      >
        Create Account
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/20"></div>
        <span className="text-sm text-white/60">OR</span>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex gap-5 justify-center">
        <button
          type="button"
          className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20"
        >
          <FaGoogle />
        </button>
        <button
          type="button"
          className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20"
        >
          <FaApple />
        </button>
      </div>
    </form>
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
  </div>
);

};

export default Form;
