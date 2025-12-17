"use client";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { login } from "services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleLogin(){
    if (!email || !password) {
    setError("Por favor, preencha todos os campos.");
    return;
    }
    
    setIsLoading(true);
    setError("");

    try {
      
      await login(email, password);

      router.push("/homePage");

    } catch {

      setError("Email ou senha inválidos.");

    } finally {

      setIsLoading(false);
    }

  }
  return (
    <div className="space-y-4">
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
      
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="seu@email.com" 
          disabled={isLoading}
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Digite sua senha" 
          disabled={isLoading}
        />
      </div>

      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl" 
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : "Acessar Capibatrilhas"}
      </Button>
    </div>
  );
}