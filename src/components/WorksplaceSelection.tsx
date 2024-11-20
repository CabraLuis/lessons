export default function WorkplaceSelection() {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Select your workplace</h1>
          <p class="py-6">Please, select your workplace</p>
          <button class="avatar" value={"mx"}>
            <div class="sm:w-24 w-20 rounded-full">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/mx.svg"
                alt="mx"
              />
            </div>
          </button>
          <button class="avatar mx-10 xl:mx-14" value={"us"}>
            <div class="sm:w-24 w-20 rounded-full">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/us.svg"
                alt="us"
              />
            </div>
          </button>
          <button class="avatar" value={"vn"}>
            <div class="sm:w-24 w-20 rounded-full">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/vn.svg"
                alt="vn"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
