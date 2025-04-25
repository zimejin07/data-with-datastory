import { useQuery } from "@apollo/client";
import { GET_CUBE_DATA } from "../graphql/queries";
import { CubeData } from "@/types/cubeData";

export const useCubeData = (country: string, measure: string) => {
    const { data, loading, error } = useQuery<{ cube_cube_M6Lh5is0FtqUhZ: CubeData[] }>(GET_CUBE_DATA, {
        variables: { country, measure },
        skip: !country || !measure,
    });

    return {
        cubeData: data?.cube_cube_M6Lh5is0FtqUhZ || [],
        loading,
        error,
    };
};
