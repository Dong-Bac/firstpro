import './Login.scss'

function Login() {
    return ( 
        <div className="container login-frontend d-flex align-items-center justify-content-center">
            <div className="col-lg-4 bg-light py-3 px-3 border rounded shadow">
                <div className="col-12 text-login text-center">Login</div>
                <div className="col-12 form-group py-2">
                    <label className='form-label'>Username:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                        />
                </div>
        
                <div className="col-12 form-group pb-4">
                    <label className='form-label'>Password:</label>
                    <input 
                        type='password'
                        className="form-control"
                        placeholder="Enter your username"
                    />
                </div>
                <button type='submit' className='btn col-12 rounded-pill py-2 login-submit'>Login</button>
            </div>
         </div>
     );
}

export default Login;