export default function FormStep2() {
  return (
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
  );
}
