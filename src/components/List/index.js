
export function List({ activities, isGoodWeather }) {
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
            <button></button>
          </li>
        ))}
      </ul>
    </>
  );
}
