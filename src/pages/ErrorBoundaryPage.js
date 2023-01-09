import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import "../css/errorboundary.css";
import Navigaton from "../component/Navigation";
import {Helmet} from "react-helmet-async"

// ErrorFallback is the fallback component that is rendered when an error occurs
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-msg">
      <div className="error-msg-box">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
}
// Bomb is the component that throws an error
function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

// ErrorBoundaryPage is the component that uses the ErrorBoundary component
// It uses the ErrorBoundary component to catch the error
// It uses the ErrorFallback component to render the fallback component
// It uses the Helmet component to manage the head of the document

function ErrorBoundaryPage() {
  const [explode, setExplode] = React.useState(false);
  return (
    <>
      <Helmet>
        <title>Errorboundary</title>
        <meta
          name="description"
          content="ErrorBoundary of a particular component"
        />
        <link ref="canonical" href="/errorBoundary" />
      </Helmet>

      <Navigaton />
      <div className="error-box">
        <h1>Error Boundary</h1>
        <button onClick={() => setExplode((e) => !e)} className="toggle">
          Click Here
        </button>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <Bomb /> : null}
        </ErrorBoundary>
      </div>
    </>
  );
}

export default ErrorBoundaryPage;
