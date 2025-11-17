import React from 'react'
import { Menu, UserIcon, Monitor } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/admin/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/admin/components/ui/dropdown-menu'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/admin/lib/utils'
import { useMainNavigation } from '@/admin/config/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/admin/components/ui/accordion'
import { Button } from '@/admin/components/ui/button'
import { logout } from '@/services/authService'
import { toast } from 'sonner'

const Navbar = () => {
  const logoutHandler = () => {
    toast.promise(logout(), {
      loading: 'Çıkış yapılıyor...',
      success: 'Başarıyla çıkış yapıldı',
      error: 'Çıkış yapılırken bir hata oluştu',
    })
  }
  const mainNavigation = useMainNavigation()
  return (
    <div className="bg-background border-b border-border h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              aria-label="Mobil menüyü aç"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-64"
          >
            <SheetHeader className="h-16 flex items-center justify-center gap-40 border-b border-border bg-card cursor-pointer">
              <SheetTitle>
                <Link to="/admin">
                  <img
                    src="/uploads/images/ocallar.png"
                    alt="Logo"
                    className="object-cover w-50 h-16 -mx-4 p-2"
                  />
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">Sidebar</SheetDescription>
            </SheetHeader>
            <div className="py-4 px-4">
              <div className="grid gap-1">
                {mainNavigation.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.children ? (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem
                          value={item.name}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="flex items-center justify-between py-2 text-muted-foreground hover:no-underline hover:text-primary transition-all">
                            <div className="flex items-center gap-3">
                              <item.icon className="h-4 w-4" />
                              <span className="font-semibold">{item.name}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0 pt-0">
                            <div className="ml-6 space-y-1">
                              {item.children.map((child) => (
                                <NavLink
                                  end={true}
                                  key={child.name}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    cn(
                                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                                      isActive && 'bg-muted text-primary',
                                    )
                                  }
                                >
                                  <child.icon className="h-4 w-4" />
                                  {child.name}
                                </NavLink>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <NavLink
                        end={true}
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary',
                            isActive && 'bg-muted text-primary',
                          )
                        }
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </NavLink>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/admin">
          <img
            src="/uploads/images/ocallar.png"
            alt="Logo"
            className="object-cover w-50 h-16 -mx-2 p-2"
          />
        </Link>
      </div>

      <div className="flex items-center gap-x-2">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full"
          aria-label="Web sitesine git"
        >
          <NavLink to="/">
            <Monitor className="h-5 w-5" />
          </NavLink>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 rounded-full"
              aria-label="Kullanıcı menüsünü aç"
            >
              <UserIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Ayarlar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logoutHandler}>Çıkış Yap</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
