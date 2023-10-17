"use client";
import { useState } from "react";
import Image from "next/image";
import { track } from '@vercel/analytics';
import { BsEnvelopeOpenFill } from "@react-icons/all-files/bs/BsEnvelopeOpenFill";
import config from "@/app/config.json";
import useRecipient from './recipient';
import background from "../assets/landscape2.jpg";
import type { FC, PropsWithChildren } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const recipient = useRecipient();
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) return children;
  return (
    <main className="flex flex-col justify-center items-center h-screen relative">
      <Image fill
        src={background}
        alt="Background"
        placeholder="blur"
        className="object-cover"
        style={{ objectPosition: '40% 50%', zIndex: -1 }} />
      <div className="font-dance text-5xl sm:text-6xl text-center">
        {config.couple.fiance.name} & {config.couple.fiancee.name}
      </div>
      <div className="font-medium mt-6">
        - Delivered to -
      </div>
      <div className="text-lg mt-3">
        {recipient}
      </div>
      <input 
        type="password"
        className="mt-5 px-4 py-2 w-80 bg-transparent rounded-full border border-gray placeholder-white focus:outline-none"
        placeholder="Passcode"
        value={password}
        onChange={e => setPassword(e.target.value)} />
      {invalid && (
        <div className="mt-1">
          Maaf, passcode anda tidak valid.
        </div>
      )}
      <button
        className="mt-4 bg-white text-black text-sm rounded font-semibold uppercase px-6 py-2 hover:bg-gray-100"
        onClick={() => {
          if (config.passcode === password) {
            setAuthenticated(true);
            track("Open Invitation");
          }
          else
            setInvalid(true);
        }}>
        <BsEnvelopeOpenFill className="inline mr-2" style={{ marginTop: -4 }} />
        <span>Open Invitation</span>
      </button>
    </main>
  );
}

export default AuthProvider;
