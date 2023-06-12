
export function Form({ onAddActivity }) {
  function handeleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.terget);
    const data = Object.fromEntries(formData);
    /* const data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.goodWeather.value,
    }; */
    onAddActivity(data);
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="form" onSubmit={handeleSubmit}>
      <h2>Add new Activity:</h2>
      <div className="form__input">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form__input">
        <label htmlFor="good-weather">Good-weather Activity:</label>
        <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" checked/>
      </div>
      <button className="form__submit-button">Submit</button>
    </form>
  );
}
