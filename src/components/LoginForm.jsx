const LoginForm = () => (
  <form className="w-full max-w-sm space-y-4">
    <div>
      <label>Email</label>
      <input type="email" placeholder="admin@gmail.com" className="w-full border px-3 py-2 rounded" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" />
    </div>
    <div className="flex justify-between items-center">
      <label><input type="checkbox" /> Remember Me</label>
      <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded">LOGIN</button>
  </form>
);

export default LoginForm;
