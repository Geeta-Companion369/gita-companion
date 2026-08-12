import env from "@/../env.json";
/**
 * Singleton backend actor client.
 *
 * Resolution order for the backend canister id:
 *   1. process.env.CANISTER_ID_BACKEND — injected by vite-plugin-environment
 *      (prefix "CANISTER_") at build time from the host environment.
 *   2. env.json `backend_canister_id` — bundled at build time via Vite's JSON
 *      import support; serves as a stable fallback when the host env var is
 *      not a real canister id.
 *
 * A value counts as a REAL canister id only when it is a non-empty string
 * that is not the literal "undefined" and not null. Only when no real id is
 * found from either source do we fall back to mockBackend (local dev / tests).
 *
 * The createActor factory takes two object-storage callbacks:
 *   _uploadFile:   serialize an ExternalBlob → Uint8Array for canister persistence
 *   _downloadFile: deserialize Uint8Array → ExternalBlob with a displayable URL
 * These power the gallery (and any other object-storage-backed field) by
 * transparently round-tripping binary assets through the actor.
 */
import { ExternalBlob, type backendInterface, createActor } from "@/backend";
import { mockBackend } from "@/mocks/backend";

type EnvJson = {
  backend_canister_id?: string | null;
  backend_host?: string | null;
  project_id?: string | null;
  ii_derivation_origin?: string | null;
};

declare const process: { env: Record<string, string | undefined> };

const typedEnv = env as EnvJson;

/**
 * Serialize an ExternalBlob to its raw bytes for canister-side persistence.
 * The actor stores these bytes in object-storage and returns an assetId.
 */
async function uploadFile(file: ExternalBlob): Promise<Uint8Array> {
  return file.getBytes();
}

/**
 * Deserialize persisted bytes back into a displayable ExternalBlob.
 * Wrapping with fromBytes produces an object URL the <img> can render directly
 * via getDirectURL(), without an extra network round-trip.
 */
async function downloadFile(data: Uint8Array): Promise<ExternalBlob> {
  // Copy into a fresh ArrayBuffer-backed Uint8Array so the type matches
  // ExternalBlob.fromBytes (which expects Uint8Array<ArrayBuffer>).
  const buf = new ArrayBuffer(data.byteLength);
  const view = new Uint8Array(buf);
  view.set(data);
  return ExternalBlob.fromBytes(view);
}

/**
 * Return a value only when it is a real canister id: a non-empty string that
 * is not the literal "undefined" and not null. Otherwise return null so the
 * caller can try the next source or fall back to the mock.
 */
function resolveCanisterId(value: string | null | undefined): string | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "undefined") return null;
  return trimmed;
}

let _client: backendInterface | null = null;

export function getBackend(): backendInterface {
  if (_client) return _client;

  // Prefer the build-pipeline-injected env var, then fall back to env.json.
  const canisterId =
    resolveCanisterId(
      typeof process !== "undefined"
        ? process.env.CANISTER_ID_BACKEND
        : undefined,
    ) ?? resolveCanisterId(typedEnv.backend_canister_id);

  if (!canisterId) {
    _client = mockBackend;
    return _client;
  }

  _client = createActor(canisterId, uploadFile, downloadFile);
  return _client;
}
