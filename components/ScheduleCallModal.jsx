"use client";
import React, { useState } from "react";
import { PopupModal } from "react-calendly";

const SCHEDULE_URL = "https://calendly.com/ncodeinnovations/30min";

export default function ScheduleCallModal({ buttonLabel = "Schedule a Call" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: "#0f62fe",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "background 0.2s",
          outline: "none",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#0353e9")}
        onMouseOut={e => (e.currentTarget.style.background = "#0f62fe")}
      >
        {buttonLabel}
      </button>
      {open && (
        <PopupModal
          url={SCHEDULE_URL}
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={document.getElementById("__next") || document.body}
          pageSettings={{
            backgroundColor: "ffffff",
            textColor: "303030",
            primaryColor: "0f62fe",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
          }}
          prefill={{}}
          utm={{}}
        />
      )}
    </>
  );
}