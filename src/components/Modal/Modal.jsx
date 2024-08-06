import * as DialogPrimitive from "@radix-ui/react-dialog";
import styles from "./modal.module.css";
import React from "react";

export const ModalContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content
        {...props}
        className={styles.content}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

ModalContent.displayName = "ModalContent";

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;
export const ModalTitle = DialogPrimitive.Title;
