"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Plus, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "group/accordion-item",
            className
        )}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        iconType?: "chevron" | "plus-minus"
    }
>(({ className, children, iconType = "chevron", ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "group flex flex-1 items-center justify-between text-left font-medium",
                "transition-all duration-300 ease-out",
                "[&[data-state=open]_.chevron-icon]:rotate-180",
                "[&[data-state=open]_.plus-icon]:hidden",
                "[&[data-state=open]_.minus-icon]:block",
                "[&[data-state=closed]_.plus-icon]:block",
                "[&[data-state=closed]_.minus-icon]:hidden",
                className
            )}
            {...props}
        >
            {children}
            {iconType === "chevron" ? (
                <div className="relative w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary/10 group-data-[state=open]:bg-primary/10 transition-colors duration-300">
                    <ChevronDown className="chevron-icon h-4 w-4 shrink-0 text-gray-500 group-hover:text-primary group-data-[state=open]:text-primary transition-all duration-300 ease-out" />
                </div>
            ) : (
                <div className="relative w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary/10 group-data-[state=open]:bg-primary transition-colors duration-300">
                    <Plus className="plus-icon h-4 w-4 shrink-0 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                    <Minus className="minus-icon hidden h-4 w-4 shrink-0 text-white transition-colors duration-300" />
                </div>
            )}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden text-sm",
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        )}
        style={{
            // CSS custom properties for smooth height animation
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
        } as React.CSSProperties}
        {...props}
    >
        <div
            className={cn(
                "pt-2 pb-4 opacity-0 translate-y-[-8px]",
                "group-data-[state=open]/accordion-item:opacity-100 group-data-[state=open]/accordion-item:translate-y-0",
                "transition-all duration-300 ease-out delay-75",
                className
            )}
        >
            {children}
        </div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
