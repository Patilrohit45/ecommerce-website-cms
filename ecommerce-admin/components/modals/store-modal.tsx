"use Client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
    <Modal title="Create store"
            description="Add a new store to merge products and categories"
            isOpen = {storeModal.isOpen}
            onClose={storeModal.onClose}
    >
        Future Create Store Form
    </Modal>
    );
};