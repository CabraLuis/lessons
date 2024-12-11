import { useState } from "preact/hooks";

export default function NewLesson() {
  const [step, setStep] = useState(1);
  const [summary, setSummary] = useState("");
  const [project, setProject] = useState("");
  const [area, setArea] = useState("");
  const [manager, setManager] = useState("");
  const [members, setMembers] = useState("");
  const [wentWrong, setWentWrong] = useState("");
  const [solved, setSolved] = useState("");
  const [lessonLearned, setLessonLearned] = useState("");
  const [notes, setNotes] = useState("");
  const [accessIDType, setAccessIDType] = useState("");
  const [accessID, setAccessID] = useState("");

  const [checkedAccess, setCheckedAccess] = useState(false);

  function nextStep() {
    setStep(2);
  }

  function previousStep() {
    setStep(1);
  }

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    await fetch("/api/new", {
      method: "POST",
      body: JSON.stringify({
        summary: summary,
        project: project,
        area: area,
        manager: manager,
        members: members,
        wentWrong: wentWrong,
        solved: solved,
        lessonLearned: lessonLearned,
        comments: notes,
      }),
    });
  }

  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register a Lesson</h1>
          <p class="py-6">
            Please, fill all the required (<span class="text-red-500">*</span>)
            fields
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl ">
          <form class="card-body" onSubmit={submit}>
            {step === 1 ? (
              <>
                <h2 class="card-title">Project or Process Information</h2>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      Summary <span class="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a summary of the lesson"
                    class="input input-bordered"
                    required
                    value={summary}
                    onChange={(e: any) => setSummary(e.target.value)}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      Project/Process<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the project/process affected"
                    class="input input-bordered"
                    required
                    value={project}
                    onChange={(e: any) => setProject(e.target.value)}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      Area<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    class="select select-bordered"
                    required
                    value={area}
                    onChange={(e: any) => setArea(e.target.value)}
                    placeholder={"Select area"}
                  >
                    <option value="" disabled selected>
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
                    <span class="label-text">
                      Project/Process Manager<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the project/process manager"
                    class="input input-bordered"
                    required
                    value={manager}
                    onChange={(e: any) => setManager(e.target.value)}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      Project/Process Members<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the project/process members"
                    class="input input-bordered"
                    required
                    value={members}
                    onChange={(e: any) => setMembers(e.target.value)}
                  />
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Is in Access Database</span>
                    <input
                      type="checkbox"
                      checked={checkedAccess}
                      class="checkbox checkbox-error"
                      onClick={() => setCheckedAccess(!checkedAccess)}
                    />
                  </label>
                </div>
                {checkedAccess ? (
                  <>
                    <div class="join">
                      <div class="form-control join-item mr-2">
                        <label class="label cursor-pointer">
                          <span class="label-text mr-1">RMA</span>
                          <input
                            type="radio"
                            name="radio-10"
                            class="radio checked:bg-red-500"
                            value="RMA"
                            onChange={(e: any) =>
                              setAccessIDType(e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div class="form-control join-item mr-2">
                        <label class="label cursor-pointer">
                          <span class="label-text mr-1">DMR</span>
                          <input
                            type="radio"
                            name="radio-10"
                            class="radio checked:bg-red-500"
                            value="DMR"
                            onChange={(e: any) =>
                              setAccessIDType(e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div class="form-control join-item mr-2">
                        <label class="label cursor-pointer">
                          <span class="label-text  mr-1">CAR</span>
                          <input
                            type="radio"
                            name="radio-10"
                            class="radio checked:bg-red-500"
                            value="CAR"
                            onChange={(e: any) =>
                              setAccessIDType(e.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter the Access ID"
                      class="input input-bordered"
                      required
                      value={accessID}
                      onChange={(e: any) => setAccessID(e.target.value)}
                    />
                  </>
                ) : null}
              </>
            ) : (
              <>
                <h2 class="card-title">Lesson Information</h2>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      What went wrong?<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <textarea
                    placeholder="What went wrong"
                    class="textarea textarea-bordered"
                    required
                    value={wentWrong}
                    onChange={(e: any) => setWentWrong(e.target.value)}
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">How was it solved?</span>
                  </label>
                  <textarea
                    placeholder="How was it solved"
                    class="textarea textarea-bordered"
                    required
                    value={solved}
                    onChange={(e: any) => setSolved(e.target.value)}
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      Lesson Learned<span class="text-red-500">*</span>
                    </span>
                  </label>
                  <textarea
                    placeholder="Lesson Learned"
                    class="textarea textarea-bordered "
                    required
                    value={lessonLearned}
                    onChange={(e: any) => setLessonLearned(e.target.value)}
                  ></textarea>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Notes</span>
                  </label>
                  <textarea
                    placeholder="Notes"
                    class="textarea textarea-bordered "
                    required
                    value={notes}
                    onChange={(e: any) => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </>
            )}
            <div class="card-actions justify-end">
              {step === 1 ? (
                <button class="btn btn-accent w-28" onClick={nextStep}>
                  Continue
                </button>
              ) : (
                <>
                  <button class="btn btn-accent w-28" onClick={previousStep}>
                    Back
                  </button>
                  <button class="btn btn-error w-28">Register</button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
