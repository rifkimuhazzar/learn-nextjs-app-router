"use client";

type Props = {
  error: Error;
};

export default function FileError({ error }: Props) {
  return (
    <div className="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
