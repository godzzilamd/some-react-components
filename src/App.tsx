import { NotifyContainer, NotifyProvider } from "./Notify/Notify";
import { Regular } from "./Notify/NotifyStories";
import "./App.scss";

function App() {
  return (
    <>
      <NotifyProvider>
        <NotifyContainer />

        <Regular
          title="Notification Text Goes Here..."
          description="Example Link Goes Here..."
        />
      </NotifyProvider>
    </>
  );
}

export default App;
