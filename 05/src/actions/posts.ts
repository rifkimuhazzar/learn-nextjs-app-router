"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { storePost, updatePostLikeStatus } from "@/lib/posts";

type FormState = {
  errors: string[];
};

export async function createPost(_prevState: FormState, formData: FormData) {
  "use server";

  const title = (formData.get("title") as string) || "";
  const image = formData.get("image") as File;
  const content = (formData.get("content") as string) || "";

  const errors = [];

  if (!title.trim()) errors.push("Title is required.");
  if (!image || !(image instanceof File) || image.size === 0) {
    errors.push("Image is required.");
  }
  if (!content.trim()) errors.push("Content is required.");

  if (errors.length > 0) return { errors };

  await storePost({
    userId: 1,
    imageUrl: "",
    title,
    content,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId: number) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
