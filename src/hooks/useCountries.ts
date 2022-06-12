import { useEffect, useState } from "react";

export function useCountries({
  country = "",
  region = "",
}: {
  country?: string;
  region?: string;
}) {
  const [countries, setCountries] = useState<
    {
      name: { common: string };
      flags: { png: string; svg: string };
      population: number;
      capital: string;
      region: string;
    }[]
  >([]);
  const [isError, toggleError] = useState<boolean>(false);
  const [isLoading, toggleLoading] = useState<boolean>(true);

  const setStatuses = (load: boolean, error: boolean) => {
    toggleLoading(load);
    toggleError(error);
  };

  const filterByRegion = (region: string) =>
    countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );

  useEffect(() => {
    const getCountries = async (country: string) => {
      setStatuses(true, false);
      try {
        const url = country
          ? `https://restcountries.com/v3.1/name/${country}`
          : "https://restcountries.com/v3.1/all";
        setCountries(
          await (
            await fetch(
              url +
                "?fields=name,capital,flags,population,region,languages,currencies,topLevelDomain,subregion"
            )
          ).json()
        );
        return setStatuses(false, false);
      } catch (error) {
        setStatuses(false, true);
        console.log(error);
      }
    };
    const timer = setTimeout(async () => getCountries(country), 500);
    return () => clearTimeout(timer);
  }, [country]);

  return {
    countries: region ? filterByRegion(region) : countries,
    isLoading,
    isError,
  };
}
