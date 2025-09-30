import useStore, { type Store } from "@/hooks/useStore"
import CustomList from "@/components/custom/reusableComponents/CustomList";

interface Prop {
    onSelectStore: (store: Store | null) => void;
    selectedStore: Store | null;
}

const StoreList = ({ onSelectStore, selectedStore }: Prop) => {
    return (
        <CustomList
            onSelectItem={onSelectStore}
            selectedItem={selectedStore}
            title="Stores"
            useDataHook={useStore}
        />
    )
}

export default StoreList