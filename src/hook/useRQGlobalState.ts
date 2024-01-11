import { queryClient } from "@/components/ReactQueryProvider";
import {
  useQuery,
  useMutation,
  QueryKey,
  MutationFunction,
} from "@tanstack/react-query";

type TUseRQGlobalState<T> = {
  initialData?: T;
  queryKey: QueryKey;
};
export default function useRQGlobalState<T>({
  initialData,
  queryKey,
}: TUseRQGlobalState<T>) {
  const { data } = useQuery({
    queryKey,
    initialData: () => initialData,
  });

  const { mutate } = useMutation({
    mutationFn: async (newData) => {
      return newData;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(queryKey, newData);
    },
  });

  const setNewData = (newData: T) => {
    const executeMutation = mutate as MutationFunction<typeof newData, unknown>;
    executeMutation(newData);
  };
  return { data, setNewData };
}
