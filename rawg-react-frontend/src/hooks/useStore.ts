import useData from "@/hooks/useData"

export interface Store {
    id: number;
    name: string;
    slug: string;
    image_background: string
}

const useStore = () => {
    return useData<Store>("stores");
}

export default useStore;