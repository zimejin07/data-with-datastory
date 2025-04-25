import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import { Country } from "@/types/country";

export const useCountries = () => {
    const { data, loading, error } = useQuery<{ item: Country[] }>(GET_COUNTRIES);

    return {
        countries: data?.item || [],
        loading,
        error,
    };
};
