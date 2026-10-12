import type { ReactNode } from 'react';

interface Props {
  id: string;
  label: string;
  final?: boolean;
  children: ReactNode;
}

export default function TraceSection({ id, label, final, children }: Props) {
  return (
    <section id={id} className="step-section">
      <span
        className={final ? 'step-section__dot step-section__dot--final' : 'step-section__dot'}
        aria-hidden="true"
      />
      <p className="step-section__label">{label}</p>
      {children}
    </section>
  );
}
