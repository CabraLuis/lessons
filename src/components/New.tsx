import { useState } from "preact/hooks";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";

export default function NewLesson() {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(2);
  }

  function previousStep() {
    setStep(1);
  }

  function submit(e: SubmitEvent) {
    e.preventDefault();
  }

  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-row-reverse lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register a Lesson</h1>
          <p class="py-6">Add a new lesson to register and share it</p>
        </div>
        <form class="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div class="card-body">
            {step === 1 ? (
              <>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Summary</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Summary"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Project</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Area</span>
                  </label>
                  <select className="select select-bordered" required>
                    <option disabled selected>
                      Select area
                    </option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Materials">Materials</option>
                    <option value="Machining">Machining</option>
                    <option value="Quality">Quality</option>
                    <option value="Clean Line">Clean Line</option>
                    <option value="IT">IT</option>
                    <option value="Floor">Floor</option>
                    <option value="Welding">Welding</option>
                    <option value="Detail">Detail</option>
                  </select>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Project Manager</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Manager"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Project Members</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Members"
                    class="input input-bordered"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">What went wrong?</span>
                  </label>
                  <textarea
                    placeholder="What went wrong"
                    class="textarea textarea-bordered h-24"
                    required
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">How was it solved?</span>
                  </label>
                  <textarea
                    placeholder="How was it solved"
                    class="textarea textarea-bordered h-24"
                    required
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Lesson Learned</span>
                  </label>
                  <textarea
                    placeholder="Lesson Learned"
                    class="textarea textarea-bordered h-24"
                    required
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Notes</span>
                  </label>
                  <textarea
                    placeholder="Notes"
                    class="textarea textarea-bordered h-24"
                    required
                  ></textarea>
                </div>
              </>
            )}
            <div class="form-control mt-6">
              {step === 1 ? (
                <button class="btn btn-primary" onClick={nextStep}>
                  Next
                </button>
              ) : (
                <div class={"join"}>
                  <button
                    class="btn btn-primary join-item "
                    onClick={previousStep}
                  >
                    Previous
                  </button>
                  <button class="btn btn-primary join-item">Register</button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
