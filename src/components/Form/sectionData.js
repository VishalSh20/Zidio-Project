import { Personal, Skills } from "./FormSections";
import { FaBrain } from "react-icons/fa6"

const sections = {
  personal: {
    id: 0,
    name: 'Personal Details',
    comp: <Personal />,
  },
  skills: {
    id: 2,
    name: 'Technical Skills',
    icon: (<FaBrain />),
    comp: <Skills />,
  },
}

export default sections;
