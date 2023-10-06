import { Container } from "../components/common/Container";
import AboutYou from "../components/pages/creator-program/AboutYou";
import ApplyNow from "../components/pages/creator-program/ApplyNow";
import BeingStudySpotCreator from "../components/pages/creator-program/BeingStudySpotCreator";
import Hero from "../components/pages/creator-program/Hero";
import YourSchedule from "../components/pages/creator-program/YourSchedule";

const CreatorProgram = () => {
  return (
    <Container>
      <Hero />
      <AboutYou />
      <BeingStudySpotCreator />
      <YourSchedule />
      <ApplyNow />
    </Container>
  );
};

export default CreatorProgram;
