import { useState } from 'react'
import { Button } from '@/admin/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/admin/components/ui/dialog' // Popover yerine Dialog kullanıyoruz
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/admin/components/ui/command'
import { Check, Search, X, MousePointerClick } from 'lucide-react'
import { cn } from '@/admin/lib/utils'
import { socialIconList } from '@/admin/constants/social-icons'
import { DialogDescription } from '@radix-ui/react-dialog'
export function IconSelector({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const selectedItem = socialIconList.find((item) => item.value === value)
  const SelectedIconComponent = selectedItem && selectedItem.icon ? selectedItem.icon : null

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          type="button"
          className={cn(
            'w-full justify-between h-12 px-4 text-left font-normal bg-background hover:bg-accent/50 border-input transition-all',
            !value && 'text-muted-foreground',
          )}
        >
          {value ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20">
                {SelectedIconComponent && <SelectedIconComponent className="h-5 w-5" />}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-none text-foreground">
                  {selectedItem?.label}
                </span>
                <span className="text-[10px] text-muted-foreground mt-0.5 font-mono">{value}</span>
              </div>
            </div>
          ) : (
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 opacity-50" />
              İkon Kütüphanesini Aç...
            </span>
          )}

          <MousePointerClick className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 overflow-hidden h-[80vh] flex flex-col">
        <DialogHeader className="px-6 py-4 border-b-none bg-muted/20">
          <DialogTitle className="flex justify-start items-baseline gap-2">
            İkon Seçimi
            <Search className="w-6 h-6 text-primary " />
          </DialogTitle>
          <DialogDescription className="sr-only">
            Listeden bir sosyal medya ikonu seçin.
          </DialogDescription>
        </DialogHeader>
        <Command className="flex-1 overflow-hidden">
          <div className="px-4 py-2 border-b">
            <CommandInput
              iconDisable={true}
              placeholder="İkon adı ara (örn: Instagram, Phone, Mail)..."
              className="border-0 focus:border focus:p-2 focus:rounded-md duration-200 font-medium text-base w-full outline-none"
            />
          </div>
          <CommandList className="flex-1 overflow-y-auto p-4 bg-muted/10 custom-scrollbar">
            <CommandEmpty className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                <X className="w-6 h-6 opacity-50" />
              </div>
              <p className="text-lg font-semibold text-foreground">İkon bulunamadı</p>
              <p className="text-sm">Lütfen farklı bir anahtar kelime deneyin.</p>
            </CommandEmpty>
            <CommandGroup heading="Mevcut İkonlar">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 pt-2">
                {socialIconList.map((item) => {
                  if (!item.icon) return null
                  const IconComponent = item.icon
                  const isSelected = value === item.value
                  return (
                    <CommandItem
                      key={item.value}
                      value={item.label}
                      onSelect={() => {
                        onChange(item.value === value ? '' : item.value)
                        setOpen(false)
                      }}
                      className={cn(
                        'flex flex-col items-center justify-center gap-3 p-4 cursor-pointer rounded-xl border transition-all duration-200 relative group',
                        'h-28',
                        isSelected
                          ? 'bg-primary/5 border-primary ring-1 ring-primary shadow-md'
                          : 'bg-card border-border hover:border-primary/50 hover:shadow-sm hover:-translate-y-0.5',
                      )}
                    >
                      <div
                        className={cn(
                          'p-3 rounded-full transition-colors duration-200',
                          isSelected
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'bg-muted group-hover:bg-primary/10 group-hover:text-primary',
                        )}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span
                        className={cn(
                          'text-xs font-medium text-center w-full truncate px-1',
                          isSelected
                            ? 'text-primary font-bold'
                            : 'text-muted-foreground group-hover:text-foreground',
                        )}
                      >
                        {item.label}
                      </span>
                      {isSelected && (
                        <div className="absolute top-2 right-2 text-primary bg-background rounded-full p-0.5 shadow-sm border">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </CommandItem>
                  )
                })}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="p-3 border-t bg-muted/20 flex justify-between items-center text-xs text-muted-foreground px-6">
          <span>
            Toplam <b>{socialIconList.length}</b> ikon listeleniyor.
          </span>
          <span className="flex items-center gap-1">
            <MousePointerClick className="w-3 h-3" /> Seçmek için tıklayın
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
