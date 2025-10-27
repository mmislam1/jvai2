// src/hooks/useDevice.ts
import { useEffect, useState } from "react";
import { DeviceType, getDeviceType } from "../utils/device";

export function useDevice(): DeviceType {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    setDevice(getDeviceType());
  }, []);

  return device;
}
