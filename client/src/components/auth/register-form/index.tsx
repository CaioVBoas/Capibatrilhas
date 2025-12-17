"use client";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { useState } from "react";
import { InitialInfoUser } from "services/register";
import { register } from "services/register";
import { useRouter } from "next/navigation";


export function RegisterForm() {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleUserInfo() {
    
    if (!name || !cpf || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const user: InitialInfoUser = { name, cpf, email, password }

    try {
      await register(user);

      router.push("/login");
    } catch  {

      setError("Erro ao registrar. Tente novamente mais tarde.");

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
        <Input id="cpf" placeholder="XXX.XXX.XXX-XX" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-email">Email</Label>
        <Input id="reg-email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-password">Criar Senha</Label>
        <Input id="reg-password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl" onClick={() => handleUserInfo()} disabled={isloading}>
        {isloading? "Registrando..." : "Cadastrar"}
      </Button>
    </div>
  );
}