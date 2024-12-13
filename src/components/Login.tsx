export default function LoginUser() {
  async function submit(e: SubmitEvent) {
    // e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.json();
    // if (data.message === "logIn") {
    //   window.location.href = "/dashboard";
    // }
  }
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">Please, enter your credentials to access the app.</p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body" onSubmit={submit}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="input input-bordered"
                name="username"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-bordered"
                name="password"
                required
              />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
