import App from "../components/pages/list-cafe/App";
import Form from "../components/pages/list-cafe/Form";
import Hero from "../components/pages/list-cafe/Hero";
import HowStudySpotWorks from "../components/pages/list-cafe/HowStudySpotWorks";
import HowToGetStarted from "../components/pages/list-cafe/HowToGetStarted";
import Opportunities from "../components/pages/list-cafe/Opportunities";
import Partners from "../components/pages/list-cafe/Partners";
import Versions from "../components/pages/list-cafe/Versions";

const ListCafe = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <App />
      <Opportunities />
      <HowStudySpotWorks />
      <Versions />
      <HowToGetStarted />
      <Form />
    </div>
  );
};

export default ListCafe;
