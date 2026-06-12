/**
 * Singleton backend actor client.
 * On live deployments, CANISTER_ID_BACKEND is injected by the build pipeline.
 * During local dev / tests the mock is used when no canister ID is available.
 */
import { type backendInterface, createActor } from "@/backend";
import { mockBackend } from "@/mocks/backend";

declare const process: { env: Record<string, string | undefined> };

function noop(_file: Uint8Array): Promise<Uint8Array> {
  return Promise.resolve(_file);
}

async function noopDownload(data: Uint8Array): Promise<{
  directURL: string;
  getDirectURL(): string;
  getBytes(): Promise<Uint8Array>;
}> {
  const url = URL.createObjectURL(new Blob([data as unknown as ArrayBuffer]));
  return {
    directURL: url,
    getDirectURL: () => url,
    getBytes: () => Promise.resolve(data),
  };
}

let _client: backendInterface | null = null;

export function getBackend(): backendInterface {
  if (_client) return _client;

  const canisterId =
    typeof process !== "undefined"
      ? process.env.CANISTER_ID_BACKEND
      : undefined;

  if (!canisterId || canisterId === "undefined") {
    _client = mockBackend;
    return _client;
  }

  // Cast stubs to ExternalBlob type — Backend uses it as an opaque container.
  _client = createActor(canisterId, noop as any, noopDownload as any);
  return _client;
}
