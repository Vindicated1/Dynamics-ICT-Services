import type { NextConfig } from "next";

function imagePatternFromBaseUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  const baseUrl = new URL(value);
  if (
    (baseUrl.protocol !== "https:" && baseUrl.protocol !== "http:") ||
    baseUrl.username ||
    baseUrl.password ||
    baseUrl.search ||
    baseUrl.hash
  ) {
    throw new Error("Image storage URLs must be valid public HTTP(S) URLs.");
  }

  const basePath = baseUrl.pathname.replace(/\/+$/, "");
  return new URL(`${baseUrl.origin}${basePath}/**`);
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseBucket = process.env.SUPABASE_STORAGE_BUCKET;
const supabaseImageBase =
  supabaseUrl && supabaseBucket
    ? `${supabaseUrl.replace(/\/+$/, "")}/storage/v1/object/public/${encodeURIComponent(supabaseBucket)}`
    : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      imagePatternFromBaseUrl(supabaseImageBase),
      imagePatternFromBaseUrl(process.env.S3_PUBLIC_BASE_URL),
    ].filter((pattern) => pattern !== null),
  },
};

export default nextConfig;
