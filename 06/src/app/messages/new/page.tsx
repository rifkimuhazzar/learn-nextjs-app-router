import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";

export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    "use server";

    const message = formData.get("message");
    if (typeof message !== "string") throw new Error("Input must be text");

    addMessage(message);

    // revalidatePath("/messages");
    // revalidatePath("/others");
    // revalidateTag("msg", "max");
    updateTag("msg");
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} required />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
