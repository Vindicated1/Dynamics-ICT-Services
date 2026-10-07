"use server";

import { EnquiryStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function updateEnquiryStatus(formData: FormData) {
  await requireAdmin();

  const parsed = z
    .object({
      id: z.string().min(1),
      status: z.nativeEnum(EnquiryStatus),
    })
    .safeParse({
      id: formData.get("id"),
      status: formData.get("status"),
    });

  if (!parsed.success) {
    throw new Error("Invalid enquiry status update.");
  }

  await prisma.contactEnquiry.update({
    where: { id: parsed.data.id },
    data: { status: parsed.data.status },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/enquiries");
}
