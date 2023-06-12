import "../../App.css";

export function List({ activities, isGoodWeather, onDeleteActivity}) {
 
  return (
    <>
      {isGoodWeather ? (
        <h1>"The weather is awesome! Go outside and:"</h1>
      ) : (
        <h1>"Bad weather outside! Here's what you can do now:"</h1>
      )}

      <ul className="list">
        {activities.map((activity) => (
          <li className="list_item" key={activity.id}>
            {activity.name}
            <button  className="list__item-button"
              type="button"
              aria-label="delete activity"
              onClick={() => onDeleteActivity(activity.id)} style={{ fontSize: "1rem" }}
            >
            ✕ </button>
          </li>
        ))}
      </ul>
    </>
  );
}
