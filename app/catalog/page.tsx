"use client"

import CampersList from '@/components/CampersList/CampersList';
import SideComponents from '@/components/SideComponents/SideComponents';
import { getCampers } from '@/lib/services/camperService';
import { useCampersStore } from '@/lib/store/useCampersStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const CampersPage = () => {
  const { page, location, AC, kitchen, TV, bathroom, form, transmission } = useCampersStore();
  const topRef = useRef<HTMLDivElement>(null);
const filters = { location, AC, kitchen, TV, bathroom, form, transmission };

  const { data, isLoading } = useQuery({
    queryKey: ["campers", filters, page],
    queryFn: () => getCampers(page, filters),
    placeholderData: keepPreviousData, 
  });

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  return (
    <div className="container" ref={topRef} >
      <SideComponents />
      <CampersList data={data} isLoading={isLoading} />
    </div>
  );
}

export default CampersPage