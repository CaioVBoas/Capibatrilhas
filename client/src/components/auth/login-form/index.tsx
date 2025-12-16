"use client";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

export function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" placeholder="Digite sua senha" />
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl">
        Acessar Capibatrilhas
      </Button>
    </div>
  );
}