import Greeting from '../widgets/landing/Greeting';
import Pets from '../widgets/landing/Pets';
import Description from '../widgets/landing/Description';
import Service from '../widgets/landing/Service/Service';
import FormOnlineAppointment from '../widgets/landing/FormOnlineAppointment';

function Landing() {
  return (
    <div>
      <Greeting />
      <Pets />
      <Description />
      <Service />
      <FormOnlineAppointment />
    </div>
  );
}

export default Landing;
