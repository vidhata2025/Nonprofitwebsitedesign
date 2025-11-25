import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Programs } from './components/Programs';
import { WorkInAction } from './components/WorkInAction';
import { GetInvolved } from './components/GetInvolved';
import { VolunteerTrajectory } from './components/VolunteerTrajectory';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Partners />
      <Programs />
      <WorkInAction />
      <GetInvolved />
      <VolunteerTrajectory />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}