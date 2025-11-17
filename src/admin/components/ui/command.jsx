import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/admin/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/admin/components/ui/dialog'

function Command({ className, ...props }) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'oc:bg-popover oc:text-popover-foreground oc:flex oc:h-full oc:w-full oc:flex-col oc:overflow-hidden oc:rounded-md',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="oc:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('oc:overflow-hidden oc:p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="oc:[&_[cmdk-group-heading]]:text-muted-foreground oc:**:data-[slot=command-input-wrapper]:h-12 oc:[&_[cmdk-group-heading]]:px-2 oc:[&_[cmdk-group-heading]]:font-medium oc:[&_[cmdk-group]]:px-2 oc:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 oc:[&_[cmdk-input-wrapper]_svg]:h-5 oc:[&_[cmdk-input-wrapper]_svg]:w-5 oc:[&_[cmdk-input]]:h-12 oc:[&_[cmdk-item]]:px-2 oc:[&_[cmdk-item]]:py-3 oc:[&_[cmdk-item]_svg]:h-5 oc:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({ className, iconDisable, ...props }) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="oc:flex oc:h-9 oc:items-center oc:gap-2 oc:border-b oc:px-3"
    >
      {!iconDisable && <SearchIcon className="oc:size-4 oc:shrink-0 oc:opacity-50" />}
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'oc:placeholder:text-muted-foreground oc:flex oc:h-10 oc:w-full oc:rounded-md oc:bg-transparent oc:py-3 oc:text-sm oc:outline-hidden oc:disabled:cursor-not-allowed oc:disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'oc:max-h-[300px] oc:scroll-py-1 oc:overflow-x-hidden oc:overflow-y-auto',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({ ...props }) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="oc:py-6 oc:text-center oc:text-sm"
      {...props}
    />
  )
}

function CommandGroup({ className, ...props }) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'oc:text-foreground oc:[&_[cmdk-group-heading]]:text-muted-foreground oc:overflow-hidden oc:p-1 oc:[&_[cmdk-group-heading]]:px-2 oc:[&_[cmdk-group-heading]]:py-1.5 oc:[&_[cmdk-group-heading]]:text-xs oc:[&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({ className, ...props }) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('oc:bg-border oc:-mx-1 oc:h-px', className)}
      {...props}
    />
  )
}

function CommandItem({ className, ...props }) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        'oc:data-[selected=true]:bg-accent oc:data-[selected=true]:text-accent-foreground oc:[&_svg:not([class*=text-])]:text-muted-foreground oc:relative oc:flex oc:cursor-default oc:items-center oc:gap-2 oc:rounded-sm oc:px-2 oc:py-1.5 oc:text-sm oc:outline-hidden oc:select-none oc:data-[disabled=true]:pointer-events-none oc:data-[disabled=true]:opacity-50 oc:[&_svg]:pointer-events-none oc:[&_svg]:shrink-0 oc:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn('oc:text-muted-foreground oc:ml-auto oc:text-xs oc:tracking-widest', className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
