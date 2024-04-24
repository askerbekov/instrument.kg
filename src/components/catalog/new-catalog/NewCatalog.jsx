import React, {useState} from 'react';
import ModalCatalogNew from "./modal-catalog/ModalCatalogNew";


const NewCatalog = ({isOpenCatalog, setOpenCatalog}) => {
  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      {/*<ModalCatalogNew open={open} handleClose={handleClose}/>*/}
    </>
  );
};

export default NewCatalog;