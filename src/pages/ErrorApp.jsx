import "../App.css";
import { Person } from "./Person";
import { ClickCounter } from "./ClickCounter";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";

function ErrorApp() {
  const person = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={person} />
        {/* <Person person={{}} /> */}
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
}
export default ErrorApp;
