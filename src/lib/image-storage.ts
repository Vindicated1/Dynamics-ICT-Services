import "server-only";

import { createClient } from "@supabase/supabase-js";

function getSupabaseStorageBaseUrl() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const bucket = process.env.SUPABASE_STORAGE_BUCKET;
  if (!supabaseUrl || !bucket) {
    return null;
  }

  try {
    const projectUrl = new URL(supabaseUrl);
    if (
      (projectUrl.protocol !== "https:" && projectUrl.protocol !== "http:") ||
      projectUrl.username ||
      projectUrl.password ||
      projectUrl.search ||
      projectUrl.hash ||
      projectUrl.pathname !== "/"
    ) {
      return null;
    }

    return new URL(
      `/storage/v1/object/public/${encodeURIComponent(bucket)}/`,
      projectUrl,
    );
  } catch {
    return null;
  }
}

export function isAllowedImageReference(value: string) {
  if (
    value.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes("..") &&
    !value.includes("\\")
  ) {
    return true;
  }

  const publicBaseUrl = getSupabaseStorageBaseUrl();
  const legacyPublicBase = process.env.S3_PUBLIC_BASE_URL;
  const allowedBaseUrls = [publicBaseUrl];

  if (legacyPublicBase) {
    try {
      allowedBaseUrls.push(new URL(legacyPublicBase));
    } catch {
      return false;
    }
  }

  try {
    const imageUrl = new URL(value);
    return allowedBaseUrls.some((baseUrl) => {
      if (!baseUrl) {
        return false;
      }

      const basePath = baseUrl.pathname.replace(/\/+$/, "");
      return (
        (baseUrl.protocol === "https:" || baseUrl.protocol === "http:") &&
        imageUrl.origin === baseUrl.origin &&
        imageUrl.pathname.startsWith(`${basePath}/`) &&
        !imageUrl.username &&
        !imageUrl.password &&
        !imageUrl.search &&
        !imageUrl.hash
      );
    });
  } catch {
    return false;
  }
}

export function getImageStorageConfig() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_STORAGE_BUCKET;

  if (!supabaseUrl || !serviceRoleKey || !bucket) {
    throw new Error(
      "Image storage is not configured. Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and SUPABASE_STORAGE_BUCKET.",
    );
  }

  const publicBaseUrl = getSupabaseStorageBaseUrl();
  if (!publicBaseUrl) {
    throw new Error(
      "SUPABASE_URL must be a valid Supabase project URL and SUPABASE_STORAGE_BUCKET must be set.",
    );
  }

  return {
    bucket,
    client: createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }),
  };
}
