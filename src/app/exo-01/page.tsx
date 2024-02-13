"use client";
import { CheckboxInput } from "@/components/checkbox-input";
import { CheckboxListInput } from "@/components/checkbox-list-input";
import { PasswordInput } from "@/components/password-input";
import { TextInput } from "@/components/text-input";
import { useId, useState } from "react";

export default function Home() {
  const [realtimeInput, setRealtimeInput] = useState("");
  return (
    <main className="flex flex-col items-center justify-center content-center h-full">
      <section className="p-5">
        <h2 className=" font-bold text-xl">Champ Textuel</h2>
      </section>
      <section className="p-5 flex flex-col items-center justify-center gap-5 w-1/2">
        <TextInput label="Défaut" placeholder="Défaut..." id={useId()} />
        <TextInput
          label="Requis"
          required
          placeholder="Requis..."
          id={useId()}
        />
        <TextInput
          id={useId()}
          label="Valeur par Défaut"
          initialValue="Ma Valeur"
          placeholder="Pas de valeur..."
        />
        <div className="w-full flex flex-col gap-3">
          <TextInput
            id={useId()}
            label="Affichage en Temps réel de la valeur"
            initialValue={realtimeInput}
            onChange={setRealtimeInput}
            placeholder="pas de valeur..."
          />
          <p className="border border-gray-300 min-h-10 rounded-md shadow-sm px-3 py-2 w-full text-wrap break-words">
            {realtimeInput}
          </p>
        </div>
        <CheckboxInput id={useId()} label="oui" onChange={console.log} />

        <CheckboxListInput
          options={{
            opt1: "Option 1",
            opt2: "Option 2",
          }}
          name="Choix Multiples"
          initiallyChecked={{
            opt1: true,
          }}
        />

        <PasswordInput
          id={useId()}
          label="Mot de passe"
          placeholder="Votre mot de passe"
        />
      </section>
    </main>
  );
}
