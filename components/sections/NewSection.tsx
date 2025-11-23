export interface Props {
  placeholder?: string;
}

export default function NewSection({ placeholder = "New Section" }: Props) {
  return <section className="container mx-auto p-8 text-center">{placeholder}</section>;
}
