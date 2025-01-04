import { useAppSelector } from '@/shared/hooks/use-app-dispatch';

function useFilteredOffersByCity() {
  const offers = useAppSelector((state) => state.offers);
  const cityFilter = useAppSelector((state) => state.cityFilter);

  return offers.filter((offer) => offer.city.name === cityFilter);
}

export default useFilteredOffersByCity;
