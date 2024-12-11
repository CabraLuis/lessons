export default function Navbar() {
  async function submit(e: SubmitEvent) {
    // e.preventDefault();
    // await fetch("/api/logout", {
    //   method: "POST",
    // });
  }
  return (
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex={0} role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/all">All Lessons</a>
            </li>
            <li>
              <a href="/new">New Lesson</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">Evo-Lesson</a>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="avatar placeholder">
              <div class="bg-neutral text-neutral-content w-8 rounded-full">
                <span class="text-xs"> TEST </span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <form onSubmit={submit}>
              <li>
                <button> Logout </button>
              </li>
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
}
