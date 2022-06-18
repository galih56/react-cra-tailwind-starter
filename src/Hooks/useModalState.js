import React, { useState } from 'react';

const useModalState=()=>{
    const [open, setOpen] = useState(false);

    const toggleModal=()=>setOpen(!open);
    const openModal=()=>setOpen(true);
    const closeModal=()=>setOpen(false);
    
    return {
        open, 
        toggleModal,
        openModal,
        closeModal
    }
}

export default useModalState;
