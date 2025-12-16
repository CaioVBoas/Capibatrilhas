"use client";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

export function RegisterForm() {
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" placeholder="Como quer ser chamado?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input id="cpf" placeholder="XXX.XXX.XXX-XX" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-email">Email</Label>
        <Input id="reg-email" type="email" placeholder="seu@email.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reg-password">Criar Senha</Label>
        <Input id="reg-password" type="password" placeholder="Mínimo 6 caracteres" />
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl">
        Cadastrar Agora
      </Button>
    </div>
  );
}