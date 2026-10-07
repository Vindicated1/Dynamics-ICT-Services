"use client";

import Image from "next/image";
import { useState } from "react";

import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE_BYTES,
} from "@/lib/image-upload-constants";

interface Props {
  initialValue: string;
  label: string;
  onUploadingChange: (uploading: boolean) => void;
  required: boolean;
  scope: "blog" | "project";
}

interface UploadResponse {
  error?: string;
  imageUrl?: string;
}

const acceptedImageTypes = Object.keys(ALLOWED_IMAGE_TYPES).join(",");

export default function ImageUploadField({
  initialValue,
  label,
  onUploadingChange,
  required,
  scope,
}: Props) {
  const [imageUrl, setImageUrl] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function uploadImage(file: File) {
    setError(null);
    if (!Object.hasOwn(ALLOWED_IMAGE_TYPES, file.type)) {
      setError("Choose a JPEG, PNG, WebP, AVIF, or GIF image.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setError("Choose an image smaller than 8 MB.");
      return;
    }

    setUploading(true);
    onUploadingChange(true);
    try {
      const formData = new FormData();
      formData.set("image", file);
      formData.set("scope", scope);

      const response = await fetch("/admin/api/image-upload", {
        method: "POST",
        body: formData,
      });
      const upload = (await response.json()) as UploadResponse;
      if (!response.ok || !upload.imageUrl) {
        throw new Error(upload.error ?? "The image could not be uploaded.");
      }

      setImageUrl(upload.imageUrl);
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "The image upload failed. Please try again.",
      );
    } finally {
      setUploading(false);
      onUploadingChange(false);
    }
  }

  return (
    <div className="space-y-3 sm:col-span-2">
      <input type="hidden" name="image" value={imageUrl} />
      <label className="block text-sm font-semibold text-slate-700">
        {label}
        <input
          type="file"
          accept={acceptedImageTypes}
          disabled={uploading}
          onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            if (file) {
              void uploadImage(file);
            }
          }}
          className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:font-semibold file:text-blue-700"
        />
      </label>
      <p className="text-xs text-slate-500">
        Select an image from this device. JPEG, PNG, WebP, AVIF, or GIF; maximum 8 MB.
        {required && !imageUrl ? " Upload an image before saving." : ""}
      </p>

      {uploading && (
        <p role="status" className="text-sm font-medium text-blue-700">
          Uploading image...
        </p>
      )}
      {error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      {imageUrl && (
        <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-3">
          <Image
            src={imageUrl}
            alt="Current image"
            width={144}
            height={96}
            unoptimized
            className="h-20 w-28 rounded-md object-cover"
          />
          <a
            href={imageUrl}
            target="_blank"
            rel="noreferrer"
            className="break-all text-sm font-medium text-blue-700 underline"
          >
            View current image
          </a>
        </div>
      )}
    </div>
  );
}
