"use client";
import { Code } from "@/components/code";
import { PasswordInput } from "@/components/password-input";
import { TextInput } from "@/components/text-input";
import { ChangeEventHandler, FormEventHandler, useId, useState } from "react";

export default function Home() {
  const [formValues, setFormValues] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [inputValues, setInputValues] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const values = {
      firstName: inputs["firstName"].value,
      lastName: inputs["lastName"].value,
      email: inputs["email"].value,
      password: inputs["password"].value,
    };

    setFormValues(values);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const inputs = e;
    const values = {
      firstName: inputs["firstName"].value,
      lastName: inputs["lastName"].value,
      email: inputs["email"].value,
      password: inputs["password"].value,
    };

    setFormValues(values);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="p-5 pt-20">
        <h1 className="font-bold text-2xl">Inscription</h1>
      </section>
      <section className="w-full">
        <form
          className="p-20 flex flex-col gap-3"
          onSubmit={handleSubmit}
          id="formulaire"
        >
          <div className="flex flex-row gap-5">
            <TextInput
              id={useId()}
              label="Prénom"
              name="firstName"
              placeholder="Votre Prénom ..."
            />
            <TextInput
              id={useId()}
              label="Nom"
              name="lastName"
              placeholder="Votre Nom ..."
            />
          </div>
          <TextInput
            type="email"
            id={useId()}
            label="Adresse E-mail"
            name="email"
            placeholder="Votre Email ..."
          />
          <PasswordInput
            id={useId()}
            label="Mot de passe"
            name="password"
            placeholder="Votre Mot de passe ..."
          />
          <div className="flex items-end w-full justify-end">
            <button className="px-3 mt-5 py-3 rounded-md shadow-sm bg-orange-400 text-white font-bold text-lg w-40 hover:bg-orange-500 transition-colors duration-200">
              M'inscrire
            </button>
          </div>
        </form>
      </section>
      <section>
        <Code label="formValues">{formValues}</Code>
      </section>
    </main>
  );
}
