import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/admin/lib/utils'
import { useMainNavigation } from '@/admin/config/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/admin/components/ui/accordion'

const Sidebar = ({ className }) => {
  const mainNavigation = useMainNavigation()

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 h-full w-64 bg-card border-r border-border pt-16 z-30 hidden md:flex flex-col',
        className,
      )}
    >
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid items-start px-4 text-sm font-medium lg:px-4">
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
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
