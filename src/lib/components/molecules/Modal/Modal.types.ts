export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  closeOnEsc?: boolean;        
  closeOnOverlayClick?: boolean;
  width?: string | number;
}