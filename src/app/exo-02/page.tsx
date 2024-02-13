"use client";
import { Code } from "@/components/code";
import { PasswordInput } from "@/components/password-input";
import { TextInput } from "@/components/text-input";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";

export default function Home() {
  const [formValues, setFormValues] = useState<FormDataInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [inputValues, setInputValues] = useState<FormDataInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const values = {
      ...inputValues,
    };
    values["firstName"] = (
      inputs.namedItem("firstName") as HTMLInputElement
    )?.value;
    values["lastName"] = (
      inputs.namedItem("lastName") as HTMLInputElement
    )?.value;
    values["email"] = (inputs.namedItem("email") as HTMLInputElement)?.value;
    values["password"] = (
      inputs.namedItem("password") as HTMLInputElement
    ).value;

    setFormValues(values);
  };

  const handleChange = (input: keyof FormDataInput, value: string) => {
    const values = { ...inputValues };
    values[input] = value;
    setInputValues(values);
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
              onChange={(value) => handleChange("firstName", value)}
            />
            <TextInput
              id={useId()}
              label="Nom"
              name="lastName"
              placeholder="Votre Nom ..."
              onChange={(value) => handleChange("lastName", value)}
            />
          </div>
          <TextInput
            type="email"
            id={useId()}
            label="Adresse E-mail"
            name="email"
            placeholder="Votre Email ..."
            onChange={(value) => handleChange("email", value)}
          />
          <PasswordInput
            id={useId()}
            label="Mot de passe"
            name="password"
            placeholder="Votre Mot de passe ..."
            onChange={(value) => handleChange("password", value)}
          />
          <div className="flex items-end w-full justify-end">
            <button className="px-3 mt-5 py-3 rounded-md shadow-sm bg-orange-400 text-white font-bold text-lg w-40 hover:bg-orange-500 transition-colors duration-200">
              M'inscrire
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-row w-full justify-around">
        <Code label="formValues">{formValues}</Code>
        <Code label="inputValues">{inputValues}</Code>
      </section>
    </main>
  );
}
