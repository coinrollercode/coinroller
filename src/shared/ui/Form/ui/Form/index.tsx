'use client'

import React, { ReactNode } from 'react'

import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

export type FormProps<T extends FieldValues> = {
    className?: string
    methods: UseFormReturn<T, unknown>
    onSubmit: (data: T) => void
    children: ReactNode
}

export const Form = <T extends FieldValues>(props: FormProps<T>) => {
    const { methods, onSubmit, className, children } = props
    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
