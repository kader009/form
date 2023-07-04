import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register , handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <h2>Login form</h2>

<form className="my-form" onSubmit={handleSubmit(onSubmit)}>
  <input aria-invalid={errors.name ? "true" : "false"} {...register("name", { required: true })} placeholder="User name" />
  
  <br />
  <input {...register("email", {required: true, pattern: {
            value:  /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            ,
            message: "Invalid email address"
          }})} placeholder="User email" />
  <br />
  <input type="submit" />

  <div id='alert'>
  {errors.name && errors.name.type === "required" && (
        <span role="alert">User name required</span>
      )}
      <br />
      {errors.email && errors.email.type === "required" && (
        <span role="alert">email is required</span>
      )}
      <br />
      {errors["email"] && <span>{errors["email"].message}</span>}
  </div>
</form>

    </>
  )
}

export default App
