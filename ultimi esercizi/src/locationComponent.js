
import useCurrentLocation from './useCurrentLocation'

export const LocationComponent = () => {
  const { location, getLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Get Current Location</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};
