"use client";
import { Code } from "@/components/code";
import { PasswordInput } from "@/components/password-input";
import { TextInput } from "@/components/text-input";
import { useForm, zodResolver } from "@mantine/form";
import { ZodFormData, type FormDataInput } from "@/utils/types";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { z } from "zod";

export default function Home() {
  const form = useForm<FormDataInput>({
    validate: zodResolver(ZodFormData),
  });

  console.log(form.getInputProps("firstName"));
  console.log(form.errors);

  const handleSubmit = (values: FormDataInput) => {
    console.log(values);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="p-5 pt-20">
        <h1 className="font-bold text-2xl">Inscription</h1>
      </section>
      <section className="w-full">
        <form
          className="p-20 flex flex-col gap-3"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <div className="flex flex-row gap-5">
            <TextInput
              id={useId()}
              label="Prénom"
              placeholder="Votre Prénom ..."
              {...form.getInputProps("firstName")}
            />
            <TextInput
              id={useId()}
              label="Nom"
              placeholder="Votre Nom ..."
              {...form.getInputProps("lastName")}
            />
          </div>
          <TextInput
            type="email"
            id={useId()}
            label="Adresse E-mail"
            placeholder="Votre Email ..."
            {...form.getInputProps("email")}
          />
          <PasswordInput
            id={useId()}
            label="Mot de passe"
            placeholder="Votre Mot de passe ..."
            {...form.getInputProps("password")}
          />
          <div className="flex items-end w-full justify-end">
            <button className="px-3 mt-5 py-3 rounded-md shadow-sm bg-orange-400 text-white font-bold text-lg w-40 hover:bg-orange-500 transition-colors duration-200">
              M'inscrire
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
