interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  return (
    <>
      <h3 className="font-semibold text-lg">
        {question}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {answer}
      </p>
    </>
  );
}