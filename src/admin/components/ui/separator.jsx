import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/admin/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "oc:bg-border oc:shrink-0 oc:data-[orientation=horizontal]:h-px oc:data-[orientation=horizontal]:w-full oc:data-[orientation=vertical]:h-full oc:data-[orientation=vertical]:w-px",
        className
      )}
      {...props} />
  );
}

export { Separator }
