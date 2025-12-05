"use client";
import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type IProps = {
  providerCls?: string;
  children: React.ReactNode;
};

export default function ModalProvider({ children, providerCls }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = useMemo(() => {
    if (!mounted) return null;
    const element = providerCls
      ? document.querySelector(`.${providerCls}`)
      : document.body;
    return element instanceof HTMLElement ? element : null;
  }, [mounted, providerCls]);

  if (!mounted || !container) return null;

  return createPortal(<>{children}</>, container);
}
