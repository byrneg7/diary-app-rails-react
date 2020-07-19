import React from 'react';
import SignOutModal from "../auth/SignOutModal";
import JournalCreateModal from "../journals/JournalCreateModal";

const Modals = () => {
  return (
    <>
      <SignOutModal/>
      <JournalCreateModal/>
    </>
  )
};

export default Modals;