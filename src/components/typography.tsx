import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function TypographyH1(data: HTMLAttributes<unknown>) {
  return (
    <h1
      {...data}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        data.className
      )}
    >
      {data.children}
    </h1>
  );
}
export function TypographyH2(data: HTMLAttributes<unknown>) {
  return (
    <h2
      {...data}
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        data.className
      )}
    >
      {data.children}
    </h2>
  );
}
