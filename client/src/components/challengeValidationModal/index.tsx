import React, { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

interface ChallengeValidationModalProps {
  isOpen: boolean;
  challengeTitle: string;
  onClose: () => void;
  onSubmit: (token: string) => void;
  isLoading?: boolean;
}

const ChallengeValidationModal: React.FC<ChallengeValidationModalProps> = ({
  isOpen,
  challengeTitle,
  onClose,
  onSubmit,
  isLoading = false,
}) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  // Limpa o estado quando o modal fecha/abre
  useEffect(() => {
    if (!isOpen) {
      setToken("");
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!token.trim()) {
      setError("Por favor, insira o token de validação.");
      return;
    }

    setError("");
    onSubmit(token);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* BACKDROP: Fundo cinza transparente 
        - bg-gray-900/60: cor cinza escuro com 60% de opacidade
        - backdrop-blur-sm: leve desfoque no que está atrás
      */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={!isLoading ? onClose : undefined}
      />

      {/* MODAL CARD */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Validar Desafio
            </h2>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Challenge Title */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Desafio</p>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {challengeTitle}
            </h3>
          </div>

          {/* Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Token de Validação
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
                if (error) setError("");
              }}
              onKeyDown={handleKeyPress}
              placeholder="Digite o código de validação"
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all disabled:bg-gray-50 disabled:cursor-not-allowed text-lg font-mono placeholder:font-sans"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}
          </div>

          {/* Subtitle / Tip */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-8">
            <p className="text-sm text-blue-800 leading-relaxed">
              💡 <span className="font-bold">Observação:</span> Procure alguém com a camisa <span className="font-bold">Capibatrilhas</span> para pedir o seu token de validação.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all disabled:opacity-50 active:scale-95"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all disabled:bg-blue-400 disabled:shadow-none active:scale-95 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                   <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   Validando...
                </div>
              ) : (
                "Validar"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeValidationModal;