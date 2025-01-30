import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-medium bg-transparent",
        light: "bg-transparent",
        flat: "",
        faded: "border-medium",
        shadow: "",
        ghost: "border-medium bg-transparent",
      },
      size: {
        sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
        md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
        lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
        icon: 'h-10 w-10',
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-small",
        md: "rounded-medium",
        lg: "rounded-large",
        full: "rounded-full",
      },
      color: {
        default: "#6B7280",
        primary: "#006EFF",
        secondary: "#9353D3",
        success: "#17C964",
        warning: "#F5A524",
        danger: "#F31260",
      },
    },
    // defaultVariants: {
    //   variant: 'default',
    //   size: 'default',
    // },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
