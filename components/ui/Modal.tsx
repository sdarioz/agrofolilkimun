'use client';

import { useEffect, useRef } from 'react';
import Button from './Button';
import Icon from './Icon';

export interface Props {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  onClose?: () => void;
  loading?: boolean;
}

export default function Modal({
  children,
  title = "Modal Title",
  open = false,
  onClose,
  loading = false,
}: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [open, onClose]);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <Button as="button" variant="ghost" size="sm" onClick={onClose} className="btn-circle">
            <Icon id="XMark" size={24} />
          </Button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          children
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
