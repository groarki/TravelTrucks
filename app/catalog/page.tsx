import CampersList from '@/components/CampersList/CampersList';
import SideComponents from '@/components/SideComponents/SideComponents';
import { getCampers } from '@/lib/services/camperService';

const Campers = async() => {

  const campers = await getCampers();

  return (
    <div className="container">
      <SideComponents />
      <CampersList items={campers.items}/>
    </div>
  );
}

export default Campers