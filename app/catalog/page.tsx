import CampersList from '@/components/CampersList/CampersList';
import SideComponents from '@/components/SideComponents/SideComponents';

const Campers = async() => {

  // const campers = await getCampers();

  return (
    <div className="container">
      <SideComponents />
      <CampersList/>
    </div>
  );
}

export default Campers