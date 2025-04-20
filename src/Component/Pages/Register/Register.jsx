import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
     <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg rounded" style={{ width: "25rem" }}>
        <h2 className="text-center mb-4 text-primary ">Login</h2>
      <form>
      <div className="mb-3">
    <label for="exampleInputFirstName" className="form-label">First Name</label>
    <input type="FirstName" className="form-control" id="exampleInputFirstName" aria-describedby="FirstName" placeholder="FirstName" />
  
  </div>
  <div className="mb-3">
    <label for="exampleInputlastName" className="form-label">last Name</label>
    <input type="lastName" className="form-control" id="exampleInputlastName" aria-describedby="lastNameHelp" placeholder="lastName" />
  
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
  
  </div>
  <div className="mb-3">
  <select class="form-select" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <Link type="submit" class="btn btn-primary w-100" to={"/"}>Submit</Link>
  </form>
  </div>
  </div>
    </>
  )
}

export default Register
