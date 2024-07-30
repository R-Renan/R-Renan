import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Portfólio em Desenvolvimento</h1>
      <p>GitHub Desktop</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
