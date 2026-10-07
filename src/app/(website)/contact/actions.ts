"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { contactServices } from "@/data/contact/contact";
import { prisma } from "@/lib/prisma";

export type ContactFormState = {
  error?: string;
  success?: boolean;
  submissionId?: string;
} | null;

const ContactEnquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().trim().max(254),
  phone: z.string().trim().max(40),
  company: z.string().trim().max(160),
  service: z.string().refine(
    (service) => contactServices.includes(service),
    "Choose a service from the list.",
  ),
  message: z.string().trim().min(1).max(10000),
});

function textField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitContactEnquiry(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = ContactEnquirySchema.safeParse({
    name: textField(formData, "name"),
    email: textField(formData, "email"),
    phone: textField(formData, "phone"),
    company: textField(formData, "company"),
    service: textField(formData, "service"),
    message: textField(formData, "message"),
  });

  if (!parsed.success) {
    return {
      error:
        parsed.error.issues[0]?.message ??
        "Please check the form details and try again.",
    };
  }

  await prisma.contactEnquiry.create({
    data: {
      ...parsed.data,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/enquiries");

  return { success: true, submissionId: randomUUID() };
}
