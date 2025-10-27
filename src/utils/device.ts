export type DeviceType = "mobile" | "tablet" | "desktop";

export function getDeviceType(): DeviceType {
  const ua = navigator.userAgent;

  if (/Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return "mobile";
  }

  if (/iPad|Tablet|PlayBook/i.test(ua)) {
    return "tablet";
  }

  return "desktop";
}
