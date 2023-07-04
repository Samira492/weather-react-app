import Form from "./Form";
import Description from "./Description";
import Information from "./Information";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Form />
        <Information />
        <Description />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
