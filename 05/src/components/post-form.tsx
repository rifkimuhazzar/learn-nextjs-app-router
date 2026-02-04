"use client";

import { useActionState } from "react";

import FormStatus from "./form-submit";

type FormState = {
  errors: string[];
};

type Props = {
  createPost: (prevState: FormState, formData: FormData) => Promise<FormState>;
};

export default function PostForm({ createPost }: Props) {
  const [state, action] = useActionState(createPost, { errors: [] });

  return (
    <>
      <h1>Create a new post</h1>

      <form action={action}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>

        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>

        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>

        <p className="form-actions">
          <FormStatus />
        </p>

        {state.errors.length > 0 && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
