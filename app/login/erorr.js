"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      {error}
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
