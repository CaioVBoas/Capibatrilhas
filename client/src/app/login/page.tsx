"use client";

import { loginBackground, logo_slogan } from 'assets';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../components/ui/card';
import Image from 'next/image';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export default function Login() {
  const session = useSession();

  if (session.status === 'authenticated') {
    redirect('/');
  }

  return (
    <div
      className="flex min-h-screen justify-around items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginBackground.src})` }}>


      <Card className="w-full max-w-sm bg-white rounded-2xl">
        <CardHeader>
          <div className='flex items-center justify-center py-5'>
            <Image src={logo_slogan} alt="Logo e slogan do Capibatrilhas" className='w-full h-full' />
          </div>
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription>
            Entre com seu email e senha do Conceta Recife abaixo para poder acessar o Capibatrilhas.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder='Digite sua senha aqui...' required />
          </div>
        </CardContent>
        <CardFooter >
          <div className='w-full '>
            <div className="flex justify-center w-full pb-6">
              <Button className="w-60 text-white text-base  bg-blue-500  rounded-xl   hover:bg-[#ffc107] transition duration-300 font-bold ">Entrar</Button>
            </div>
            <div className='text-sm text-gray-400'>
              Ainda não possui cadastro no conecta recife?
              <a href="https://conecta.recife.pe.gov.br/" target="_blank" className="text-blue-400 underline hover:text-blue-600">Cadastre-se aqui</a>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>

  );
}
