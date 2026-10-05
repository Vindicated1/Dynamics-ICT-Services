import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";

const SCRYPT_OPTIONS = {
  N: 16_384,
  r: 8,
  p: 1,
};

const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

/**
 * @param {string} password
 * @param {Buffer} salt
 * @param {number} keyLength
 * @returns {Promise<Buffer>}
 */
function deriveKey(password, salt, keyLength) {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, keyLength, SCRYPT_OPTIONS, (error, key) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(key);
    });
  });
}

/**
 * @param {string} password
 */
export async function hashAdminPassword(password) {
  if (password.length < 12 || password.length > 128) {
    throw new Error("Admin passwords must be between 12 and 128 characters.");
  }

  const salt = randomBytes(SALT_LENGTH);
  const key = await deriveKey(password, salt, KEY_LENGTH);

  return [
    "scrypt",
    SCRYPT_OPTIONS.N,
    SCRYPT_OPTIONS.r,
    SCRYPT_OPTIONS.p,
    salt.toString("base64url"),
    key.toString("base64url"),
  ].join("$");
}

/**
 * @param {string} password
 * @param {string} encodedHash
 */
export async function verifyAdminPassword(password, encodedHash) {
  const [algorithm, n, r, p, saltValue, keyValue, ...extra] =
    encodedHash.split("$");

  if (
    algorithm !== "scrypt" ||
    n !== String(SCRYPT_OPTIONS.N) ||
    r !== String(SCRYPT_OPTIONS.r) ||
    p !== String(SCRYPT_OPTIONS.p) ||
    !saltValue ||
    !keyValue ||
    extra.length > 0 ||
    !/^[A-Za-z0-9_-]+$/.test(saltValue) ||
    !/^[A-Za-z0-9_-]+$/.test(keyValue)
  ) {
    return false;
  }

  const salt = Buffer.from(saltValue, "base64url");
  const expectedKey = Buffer.from(keyValue, "base64url");

  if (salt.length !== SALT_LENGTH || expectedKey.length !== KEY_LENGTH) {
    return false;
  }

  const actualKey = await deriveKey(password, salt, expectedKey.length);
  return timingSafeEqual(actualKey, expectedKey);
}
