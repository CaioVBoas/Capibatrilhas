"use client";

import { useState } from "react";
import Image from 'next/image';
import { loginBackground, logo_slogan } from 'assets';
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';
import { Tabs, TabsContent } from "components/ui/tabs";

// import dos formulários criados no diretório auth 
import { LoginForm } from "components/auth/login-form";
import { RegisterForm } from "components/auth/register-form";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
    className="relative min-h-dvh w-full flex justify-center items-center bg-no-repeat bg-cover bg-center overflow-hidden"
    style={{ 
      backgroundImage: `url(${loginBackground.src})`,
      backgroundAttachment: 'fixed' 
  }}
>

      <Card className="w-full max-w-lg bg-white backdrop-blur-sm rounded-2xl">
        <CardHeader>
          <div className='flex justify-center py-4'>
            <Image src={logo_slogan} alt="Logo" className='w-auto h-auto' />
          </div>
          <CardTitle className="text-2xl text-center font-bold">
            {activeTab === "login" ? "Login" : "Cadastro"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            

            <TabsContent value="login">
              <LoginForm />
              <button 
                onClick={() => setActiveTab("register")}
                className="w-full text-center text-sm text-blue-600 mt-4 hover:underline"
              >
                Não tem conta? Cadastre-se
              </button>
            </TabsContent>

            <TabsContent value="register">
              <RegisterForm />
              <button 
                onClick={() => setActiveTab("login")}
                className="w-full text-center text-sm text-blue-600 mt-4 hover:underline"
              >
                Já tem conta? Faça login
              </button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}