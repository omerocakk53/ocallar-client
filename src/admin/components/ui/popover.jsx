import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/admin/lib/utils"

function Popover({
  ...props
}) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "oc:bg-popover oc:text-popover-foreground oc:data-[state=open]:animate-in oc:data-[state=closed]:animate-out oc:data-[state=closed]:fade-out-0 oc:data-[state=open]:fade-in-0 oc:data-[state=closed]:zoom-out-95 oc:data-[state=open]:zoom-in-95 oc:data-[side=bottom]:slide-in-from-top-2 oc:data-[side=left]:slide-in-from-right-2 oc:data-[side=right]:slide-in-from-left-2 oc:data-[side=top]:slide-in-from-bottom-2 oc:z-50 oc:w-72 oc:origin-(--radix-popover-content-transform-origin) oc:rounded-md oc:border oc:p-4 oc:shadow-md oc:outline-hidden",
          className
        )}
        {...props} />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
