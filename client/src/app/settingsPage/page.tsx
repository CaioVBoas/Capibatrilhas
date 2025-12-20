'use client';

import React, { useState } from 'react';
import NavBar from 'components/navBar';
import { outfit, dmSans } from '../../styles/fonts';
import { Mail, Lock, Trash2, Save } from 'lucide-react';

export default function SettingsPage() {
    const [email, setEmail] = useState('');
    const [emailPassword, setEmailPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletePassword, setDeletePassword] = useState('');
    const [deleteError, setDeleteError] = useState('');

    const onUpdateEmail = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('update email', { email, emailPassword });
    };

    const onUpdatePassword = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Wire API
        console.log('update password', { currentPassword, newPassword, confirmPassword });
    };

    const onDeleteAccount = () => {
        setIsDeleteOpen(true);
    };

    const onConfirmDelete = (e: React.FormEvent) => {
        e.preventDefault();
        if (!deletePassword.trim()) {
            setDeleteError('Informe sua senha para confirmar.');
            return;
        }
        // TODO: Wire API
        console.log('delete account', { password: deletePassword });
        setIsDeleteOpen(false);
        setDeletePassword('');
        setDeleteError('');
    };

    return (
        <div className={`bg-gray-50/50 min-h-screen pb-12 ${dmSans.className}`}>
            <NavBar />

            <main className="max-w-4xl mx-auto px-6 mt-10 space-y-8">
                <header className="flex items-center gap-3">
                    <h1 className={`text-gray-900 font-bold text-2xl ${outfit.className}`}>Configurações</h1>
                </header>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <h2 className={`text-gray-900 font-bold text-lg ${outfit.className}`}>Atualizar Email</h2>
                    </div>

                    <form onSubmit={onUpdateEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-600 mb-1">Novo email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="voce@email.com"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-600 mb-1">Senha atual</label>
                            <input
                                type="password"
                                value={emailPassword}
                                onChange={(e) => setEmailPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                required
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-linear-to-r from-[#2563EB] to-[#1E40AF] text-white px-5 py-2.5 rounded-xl shadow-sm hover:opacity-95 transition-all"
                            >
                                <Save className="w-4 h-4" /> Salvar email
                            </button>
                        </div>
                    </form>
                </section>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <Lock className="w-5 h-5 text-gray-400" />
                        <h2 className={`text-gray-900 font-bold text-lg ${outfit.className}`}>Atualizar Senha</h2>
                    </div>

                    <form onSubmit={onUpdatePassword} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Senha atual</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Nova senha</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-600 mb-1">Confirmar nova senha</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                required
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-linear-to-r from-[#2563EB] to-[#1E40AF] text-white px-5 py-2.5 rounded-xl shadow-sm hover:opacity-95 transition-all"
                            >
                                <Save className="w-4 h-4" /> Salvar senha
                            </button>
                        </div>
                    </form>
                </section>

                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Trash2 className="w-5 h-5 text-red-500" />
                        <h2 className={`text-gray-900 font-bold text-lg ${outfit.className}`}>Excluir Conta</h2>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">Esta ação é irreversível e removerá todos os seus dados.</p>
                    <button
                        onClick={onDeleteAccount}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl shadow-sm border border-red-700/30 transition-all"
                    >
                        <Trash2 className="w-4 h-4" /> Excluir minha conta
                    </button>
                </section>

                {isDeleteOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/50" onClick={() => setIsDeleteOpen(false)} />
                        <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Trash2 className="w-5 h-5 text-red-500" />
                                <h3 className={`text-gray-900 font-bold text-lg ${outfit.className}`}>Confirmar exclusão</h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">Digite sua senha para confirmar a exclusão da conta.</p>

                            <form onSubmit={onConfirmDelete} className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Senha</label>
                                    <input
                                        type="password"
                                        value={deletePassword}
                                        onChange={(e) => { setDeletePassword(e.target.value); setDeleteError(''); }}
                                        placeholder="••••••••"
                                        autoFocus
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]"
                                    />
                                    {deleteError && (
                                        <p className="text-red-600 text-xs mt-1">{deleteError}</p>
                                    )}
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => { setIsDeleteOpen(false); setDeletePassword(''); setDeleteError(''); }}
                                        className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-sm border border-red-700/30"
                                    >
                                        <Trash2 className="w-4 h-4" /> Excluir
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}