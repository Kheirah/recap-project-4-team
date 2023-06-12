import { Form } from "./components/Form";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { useWeather } from "./utils/fetch";
import { uid } from "uid";
import { useEffect } from "react";

function App() {
  //Const
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const weather = true; //useWeather();

  //Add activity
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  //Delete activity
  function handleDeleteActivity(id) {
    setActivities(
      activities.map((activity) => (activity.id === id ? false : true))
    );
  }
  useEffect(() => {
    const interval = setInterval(() => weather, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="weatherApp">
        <h1>{weather?.condition}</h1>
        <h2>
          `Temperature in ${weather?.location}: ${weather?.temperature} °C`
        </h2>
        <List
          activities={activities}
          isGoodWeather={weather?.isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
