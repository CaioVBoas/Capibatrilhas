"use client";

import React, { useState } from "react";
import { Link, Copy, QrCode } from "lucide-react";
import { Users } from "lucide-react";
import Image from "next/image";

interface TrailInvitationProps {
  link: string;
}

const TrailInvitationComponent: React.FC<TrailInvitationProps> = ({ link }) => {
  
  const [copied, setCopied] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
 
  const [qrModalMounted, setQrModalMounted] = useState(false);
  const [qrModalVisible, setQrModalVisible] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold flex items-center gap-1">
                <Users className="h-5 w-5 text-gray-600" aria-hidden="true" />
                Convidar Usuários para sua Trilha
            </h2>

            <div>
            <p className="text-gray-500 ml-3">Compartilhe sua trilha personalizada com amigos e familiares através de QR Code ou link</p>
            </div>

              <div className="flex gap-3 w-full items-stretch">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-4 text-gray-700 border border-gray-100 font-mono w-[50%] font-semibold">
                  <Link className="h-5 w-5 text-gray-500" />

                  <span className="truncate">{link}</span>

                  <button
                    onClick={() => copyToClipboard(link)}
                    className={copied ? "ml-auto p-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors":"ml-auto p-2 rounded-lg text-blue-600 hover:bg-gray-200 transition-colors" }
                    aria-label="Copiar link de convite"
                    title={copied ? "Copiado" : "Copiar"}
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>

                <div className="w-[50%]">
                  <button
                    onClick={() => {
                      setQrModalOpen(true);
                      setQrModalMounted(true);

                      setTimeout(() => setQrModalVisible(true), 10);
                    }}
                    className="flex items-center gap-2 w-full justify-center bg-gray-50 rounded-xl h-full p-4 text-gray-700 border border-gray-100 hover:bg-gray-100 transition-colors"
                    aria-haspopup="dialog"
                    aria-expanded={qrModalOpen}
                  >
                    <QrCode className="h-5 w-5 text-gray-500" />
                    <span className="font-semibold text-m">Mostrar QR Code</span>
                  </button>
                </div>
              </div>
            
            </div>
            {qrModalMounted && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className={
                    `absolute inset-0 bg-black/50 transition-opacity duration-200 ${
                      qrModalVisible ? "opacity-100" : "opacity-0"
                    }`
                  }
                  onClick={() => {
                    setQrModalVisible(false);
                    setTimeout(() => {
                      setQrModalMounted(false);
                      setQrModalOpen(false);
                    }, 200);
                  }}
                  aria-hidden
                />

                <div
                  className={`relative bg-white rounded-lg p-6 shadow-xl z-10 w-[min(90%,420px)] transform transition-all duration-200 ${
                    qrModalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
                  }`}
                >
                  <button
                    onClick={() => {
                      setQrModalVisible(false);
                      setTimeout(() => {
                        setQrModalMounted(false);
                        setQrModalOpen(false);
                      }, 200);
                    }}
                    className="absolute top-2 right-2 p-1 rounded-md text-blue-600 hover:bg-gray-100"
                    aria-label="Fechar QR modal">
                    ✕
                  </button>

                  <div className="flex flex-col items-center">
                    <Image
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                        link
                      )}`}
                      alt="QR code do link de convite"
                      width={300}
                      height={300}
                      className="w-64 h-64 object-contain"
                    />

        
                  </div>
                </div>
              </div>
            )}
    </>
  );
};

export default TrailInvitationComponent;