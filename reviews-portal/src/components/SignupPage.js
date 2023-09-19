function SignupPage () {
    return (
        <div className="container">
          <form className="form">
            <h2 className="text-center">Sign up</h2>
            <div className="my-4">
                <div class="form-group mb-2">
                  <label className="sr-only" for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" required/>
                </div>
                <div class="form-group mb-2">
                  <label className="sr-only" for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email" required/>
                </div>
                <div class="form-group mb-2">
                  <label className="sr-only" for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password" required/>
                </div>
            </div>
            <button className="btn btn-primary btn-block" type="button">Sign up</button>
          
            <p className="my-3 text-center font-weight-bold">Sign up with</p>
            <div className="d-flex justify-content-center">
              <a className="btn btn-light mr-1" href="#0">
                Google
              </a>
              <a className="btn btn-light" href="#0">
                Facebook
              </a>
            </div>
          </form>
        </div>
    );
}

export default SignupPage;