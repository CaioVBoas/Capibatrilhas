"use client";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { useState } from "react";
import { register } from "services/register";

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  async function handleUserInfo() {
    
    if (!name || !cpf || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password.length < 8) {
      setError("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      setError("Por favor, insira um CPF válido com 11 dígitos numéricos.");
      return;
    }

    setIsLoading(true);

    try {

      await register(name, cpf, email, password);

      onSuccess();

    } catch  {

      setError("Verifique seus dados ou se o e-mail/CPF já existem.");

    } finally {
      setIsLoading(false);
  }
}

  return (
    <div className="space-y-4">

      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

      <div className="grid gap-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" placeholder="Como quer ser chamado?" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input id="cpf" placeholder="XXXXXXXXXXX" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-email">Email</Label>
        <Input id="reg-email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-password">Criar Senha</Label>
        <Input id="reg-password" type="password" placeholder="Mínimo 8 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl" onClick={() => handleUserInfo()} disabled={isloading}>
        {isloading? "Registrando..." : "Cadastrar"}
      </Button>
    </div>
  );
}