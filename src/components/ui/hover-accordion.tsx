"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

interface HoverAccordionProps {
  hoverDelay?: number;
  leaveDelay?: number;
  children: React.ReactNode;
  defaultValue?: string;
}

function HoverAccordion({
  hoverDelay = 200,
  leaveDelay = 400,
  children,
  defaultValue = "",
}: HoverAccordionProps) {
  const [accordionValue, setAccordionValue] =
    React.useState<string>(defaultValue);
  const [isMobile, setIsMobile] = React.useState(false);
  const accordionRef = React.useRef<HTMLDivElement>(null);
  const defaultValueRef = React.useRef<string>(defaultValue);

  // Detect if device is mobile/touch device
  React.useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768; // md breakpoint
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Global timeout refs to prevent conflicts between items
  const globalHoverTimeoutRef = React.useRef<NodeJS.Timeout>(null);
  const globalLeaveTimeoutRef = React.useRef<NodeJS.Timeout>(null);

  // Enhanced setValue that clears all global timeouts
  const enhancedSetValue = React.useCallback((value: string) => {
    // Clear any global timeouts when setting value
    if (globalHoverTimeoutRef.current) {
      clearTimeout(globalHoverTimeoutRef.current);
      globalHoverTimeoutRef.current = null;
    }
    if (globalLeaveTimeoutRef.current) {
      clearTimeout(globalLeaveTimeoutRef.current);
      globalLeaveTimeoutRef.current = null;
    }
    setAccordionValue(value);
  }, []);

  // Store the setValue function on the ref for children to access
  React.useEffect(() => {
    if (accordionRef.current) {
      const element = accordionRef.current as HTMLDivElement & {
        _setAccordionValue?: (value: string) => void;
        _isMobile?: boolean;
        _hoverDelay?: number;
        _leaveDelay?: number;
        _defaultValue?: string;
        _globalHoverTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
        _globalLeaveTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
      };
      element._setAccordionValue = enhancedSetValue;
      element._isMobile = isMobile;
      element._hoverDelay = hoverDelay;
      element._leaveDelay = leaveDelay;
      element._defaultValue = defaultValueRef.current;
      element._globalHoverTimeoutRef = globalHoverTimeoutRef;
      element._globalLeaveTimeoutRef = globalLeaveTimeoutRef;
    }
  }, [enhancedSetValue, isMobile, hoverDelay, leaveDelay]);

  // Cleanup global timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (globalHoverTimeoutRef.current)
        clearTimeout(globalHoverTimeoutRef.current);
      if (globalLeaveTimeoutRef.current)
        clearTimeout(globalLeaveTimeoutRef.current);
    };
  }, []);

  return (
    <AccordionPrimitive.Root
      ref={accordionRef}
      type="single"
      value={accordionValue}
      onValueChange={setAccordionValue}
      data-slot="hover-accordion"
      data-hover-delay={hoverDelay}
      data-leave-delay={leaveDelay}
      data-is-mobile={isMobile}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

interface HoverAccordionItemProps
  extends React.ComponentProps<typeof AccordionPrimitive.Item> {
  value: string;
}

function HoverAccordionItem({
  className,
  value,
  ...props
}: HoverAccordionItemProps) {
  const [, setIsHovered] = React.useState(false);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout>(null);
  const leaveTimeoutRef = React.useRef<NodeJS.Timeout>(null);
  const itemRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = React.useCallback(() => {
    const accordionRoot = itemRef.current?.closest(
      '[data-slot="hover-accordion"]'
    ) as HTMLDivElement & {
      _setAccordionValue?: (value: string) => void;
      _isMobile?: boolean;
      _hoverDelay?: number;
      _leaveDelay?: number;
      _defaultValue?: string;
      _globalHoverTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
      _globalLeaveTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
    };
    if (!accordionRoot || accordionRoot._isMobile) return;

    // Clear all existing timeouts (local and global)
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (accordionRoot._globalHoverTimeoutRef?.current) {
      clearTimeout(accordionRoot._globalHoverTimeoutRef.current);
      accordionRoot._globalHoverTimeoutRef.current = null;
    }
    if (accordionRoot._globalLeaveTimeoutRef?.current) {
      clearTimeout(accordionRoot._globalLeaveTimeoutRef.current);
      accordionRoot._globalLeaveTimeoutRef.current = null;
    }

    // Set hover timeout on global ref
    const timeout = setTimeout(() => {
      setIsHovered(true);
      if (accordionRoot._setAccordionValue) {
        accordionRoot._setAccordionValue(value);
      }
    }, accordionRoot._hoverDelay || 200);

    hoverTimeoutRef.current = timeout;
    if (accordionRoot._globalHoverTimeoutRef) {
      accordionRoot._globalHoverTimeoutRef.current = timeout;
    }
  }, [value]);

  const handleMouseLeave = React.useCallback(() => {
    const accordionRoot = itemRef.current?.closest(
      '[data-slot="hover-accordion"]'
    ) as HTMLDivElement & {
      _setAccordionValue?: (value: string) => void;
      _isMobile?: boolean;
      _hoverDelay?: number;
      _leaveDelay?: number;
      _defaultValue?: string;
      _globalHoverTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
      _globalLeaveTimeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
    };
    if (!accordionRoot || accordionRoot._isMobile) return;

    // Clear any existing hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (accordionRoot._globalHoverTimeoutRef?.current) {
      clearTimeout(accordionRoot._globalHoverTimeoutRef.current);
      accordionRoot._globalHoverTimeoutRef.current = null;
    }

    // Clear any existing leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (accordionRoot._globalLeaveTimeoutRef?.current) {
      clearTimeout(accordionRoot._globalLeaveTimeoutRef.current);
      accordionRoot._globalLeaveTimeoutRef.current = null;
    }

    // Set leave timeout on global ref
    const timeout = setTimeout(() => {
      setIsHovered(false);
      if (accordionRoot._setAccordionValue) {
        accordionRoot._setAccordionValue(accordionRoot._defaultValue || "");
      }
    }, accordionRoot._leaveDelay || 400);

    leaveTimeoutRef.current = timeout;
    if (accordionRoot._globalLeaveTimeoutRef) {
      accordionRoot._globalLeaveTimeoutRef.current = timeout;
    }
  }, []);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative transition-all duration-300 ease-out hover:bg-white/2 rounded-lg"
    >
      <AccordionPrimitive.Item
        data-slot="hover-accordion-item"
        className={cn("border-b last:border-b-0", className)}
        value={value}
        {...props}
      />
    </div>
  );
}

function HoverAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="hover-accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 py-4 font-space-grotesk text-left text-lg md:text-2xl font-bold transition-all duration-300 ease-out outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]]:hidden border-b border-b-white hover:bg-white/5 cursor-pointer touch-manipulation",
          className
        )}
        {...props}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function HoverAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="hover-accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-500 ease-out"
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-4 transition-all duration-300 ease-out data-[state=open]:animate-content-reveal",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export {
  HoverAccordion,
  HoverAccordionItem,
  HoverAccordionTrigger,
  HoverAccordionContent,
};
