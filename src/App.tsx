import Overview from "./Overview";
import ProjectExp from "./ProjectExp";
import SelfIntro from "./SelfIntro";
import WorkExp from "./WorkExp";

export default function App() {
  return <div style={{ maxWidth: '800px', margin: '0 auto', padding: '15px 5px' }}>
    <Overview />
    <SelfIntro />
    <WorkExp />
    <ProjectExp />
  </div>
}