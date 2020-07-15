import React from 'react';
import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";
import SignOutModal from "../auth/SignOutModal";
import JournalCreateModal from "../journals/JournalCreateModal";

const Modals = () => {
  return (
    <>
      <SignInModal/>
      <SignUpModal/>
      <SignOutModal/>
      <JournalCreateModal/>
    </>
  )
};

export default Modals;