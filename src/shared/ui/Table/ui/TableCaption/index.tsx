import * as React from 'react'

import { cn } from 'shared/utils/cn'

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
    ({ className, ...props }, ref) => (
        <caption ref={ref} className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
    ),
)
TableCaption.displayName = 'TableCaption'
