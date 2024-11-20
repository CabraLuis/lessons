export default function FormStep1() {
  return (
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
  );
}
