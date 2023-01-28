import { Warning } from "phosphor-react";
import { useRouteError } from "react-router-dom";
import { red } from 'tailwindcss/colors'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Warning className="mb-2" size={48} color={red[500]} />
      <h1 className="font-bold text-2xl mb-8" >Oops!</h1>
      <p>Desculpa, um erro inesperado aconteceu.</p>
    </div>
  );
}