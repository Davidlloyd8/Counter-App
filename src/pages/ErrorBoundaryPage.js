import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import "../css/errorboundary.css";
import Navigaton from "../component/Navigation";
import {Helmet} from "react-helmet-async"

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

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

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
