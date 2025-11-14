interface Props {
  /**
   * @description The description of the name prop.
   */
  name?: string;

  /**
   * @description Optional CSS class for additional styling.
   */
  className?: string;

  /**
   * @description Optional children for custom content.
   */
  children?: React.ReactNode;
}

export default function Section({ name = "Capy", className = "", children }: Props) {
  return (
    <section className={`bg-gray-100 p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">Welcome, {name}!</h2>
      <div className="mt-4">{children || <p className="text-gray-600">This is your customizable section.</p>}</div>
    </section>
  );
}
