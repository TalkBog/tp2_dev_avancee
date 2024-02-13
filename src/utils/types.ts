type LabelProps = {
    id          :   string;
    label       :   string;
    required    ?:  boolean
};

type TextInputProps = LabelProps & {
    initialValue?:  string;
    placeholder ?:  string;
    onChange    ?:  (value: string) => void;
    type ?: "text" | "password"
};

type CheckboxInputProps = LabelProps & {
    checked     ?:  boolean,
    onChange    ?:  (value: boolean) => void;
    name ?: string
}

type CheckboxListInputProps<T = Record<string,string>> = {
    name            :   string
    options         :   T,
    onChange        ?:   (values: Record<keyof T, boolean>) => void,
    initiallyChecked?:  Record<keyof T, boolean>
}

type PasswordInputProps = TextInputProps & {
    show ?: boolean
}