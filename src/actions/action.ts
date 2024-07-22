"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  const result = postSchema.safeParse({ title, body });

  if (!result.success) {
    const errors = result.error.format();
    console.error("Validation errors:", errors);
    return; // Handle errors appropriately
  }

  //update database
  await prisma.post.create({
    data: {
      title: result.data.title,
      body: result.data.body,
    },
  });

  //revalidate /posts to instantly load new post
  revalidatePath("/posts");
  redirect("/posts");
}
