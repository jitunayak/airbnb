const useApi = () => {
  const fetchHomePageResults = async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=10&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features"
    );
    return response.json();
  };

  return { fetchHomePageResults };
};

export default useApi;
