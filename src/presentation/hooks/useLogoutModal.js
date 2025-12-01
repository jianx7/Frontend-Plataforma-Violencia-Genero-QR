// src/presentation/hooks/useLogoutModal.js
import { useState } from 'react';
import { useAuth } from '../../app/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function useLogoutModal() {
  const [showModal, setShowModal] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const openLogoutModal = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    logout(); // Limpia el contexto y localStorage
    navigate('/login', { replace: true });
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return {
    showModal,
    openLogoutModal,
    handleConfirmLogout,
    handleCancelLogout,
  };
}