import { z } from "zod";

export type LabelProps = {
    id          :   string;
    label       :   string;
    required    ?:  boolean
};

export type TextInputProps = LabelProps & {
    initialValue?:  string;
    placeholder ?:  string;
    onChange    ?:  (value: string) => void;
    type        ?:  "text" | "password" | "email"
    name        ?:   string
    error       ?:   string
};

export type CheckboxInputProps = LabelProps & {
    checked     ?:  boolean,
    onChange    ?:  (value: boolean) => void;
    name        ?:  string
}

export type CheckboxListInputProps<T = Record<string,string>> = {
    name            :   string
    options         :   T,
    onChange        ?:   (values: Record<keyof T, boolean>) => void,
    initiallyChecked?:  Record<keyof T, boolean>
}

export type PasswordInputProps = TextInputProps & {
    show    ?:  boolean
}

export const ZodFormData = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  });
export type FormDataInput = z.infer<typeof ZodFormData>;