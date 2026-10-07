import { randomUUID } from "node:crypto";

import { getAdminSession } from "@/lib/admin-auth";
import { getImageStorageConfig } from "@/lib/image-storage";
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_BYTES,
  type AllowedImageType,
} from "@/lib/image-upload-constants";

function isAllowedImageType(value: string): value is AllowedImageType {
  return Object.hasOwn(ALLOWED_IMAGE_TYPES, value);
}

export async function POST(request: Request) {
  const admin = await getAdminSession();
  if (!admin) {
    return Response.json(
      { error: "Sign in as an administrator to upload images." },
      { status: 401 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid upload request." }, { status: 400 });
  }

  const image = formData.get("image");
  const scope = formData.get("scope");
  if (
    !(image instanceof File) ||
    (scope !== "blog" && scope !== "project") ||
    image.size === 0 ||
    !isAllowedImageType(image.type)
  ) {
    return Response.json(
      { error: "Choose a JPEG, PNG, WebP, AVIF, or GIF image." },
      { status: 400 },
    );
  }

  if (image.size > MAX_IMAGE_SIZE_BYTES) {
    return Response.json(
      {
        error: `Images must be no larger than ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB.`,
      },
      { status: 400 },
    );
  }

  try {
    const storage = getImageStorageConfig();
    const contentType = image.type;
    const extension = ALLOWED_IMAGE_TYPES[contentType];
    const key = `admin-uploads/${scope}/${randomUUID()}.${extension}`;
    const { error } = await storage.client.storage
      .from(storage.bucket)
      .upload(key, image, {
        cacheControl: "31536000",
        contentType,
        upsert: false,
      });

    if (error) {
      throw error;
    }

    const { data } = storage.client.storage
      .from(storage.bucket)
      .getPublicUrl(key);

    return Response.json({
      imageUrl: data.publicUrl,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Image storage is not configured.")
    ) {
      return Response.json({ error: error.message }, { status: 503 });
    }

    console.error("Unable to upload an admin image.", error);
    return Response.json(
      {
        error: "Image storage is unavailable. Check the Supabase Storage configuration.",
      },
      { status: 503 },
    );
  }
}
