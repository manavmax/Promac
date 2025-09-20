import React from "react";
import { cn } from "../../utils/cn";

const Input = React.forwardRef(({
    className,
    type = "text",
    label,
    description,
    error,
    required = false,
    id,
    ...props
}, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;

    // Base input classes
    const baseInputClasses = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    // Checkbox-specific styles
    if (type === "checkbox") {
        return (
            <input
                type="checkbox"
                className={cn(
                    "h-4 w-4 rounded border border-promac-red-200 bg-background text-promac-red-600 focus:ring-2 focus:ring-promac-red-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                id={inputId}
                {...props}
            />
        );
    }

    // Radio button-specific styles
    if (type === "radio") {
        return (
            <input
                type="radio"
                className={cn(
                    "h-4 w-4 rounded-full border border-promac-red-200 bg-background text-promac-red-600 focus:ring-2 focus:ring-promac-red-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                id={inputId}
                {...props}
            />
        );
    }

    // For regular inputs with wrapper structure
    return (
        <div className="space-y-2">
            {label && (
                <label
                    htmlFor={inputId}
                    className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        error ? "text-red-600" : "text-black"
                    )}
                >
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            )}

            <input
                type={type}
                className={cn(
                    baseInputClasses,
                    error && "border-red-600 focus-visible:ring-red-600",
                    className
                )}
                ref={ref}
                id={inputId}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${inputId}-error` : description ? `${inputId}-description` : undefined}
                {...props}
            />

            {description && !error && (
                <p id={`${inputId}-description`} className="text-sm text-muted-foreground">
                    {description}
                </p>
            )}

            {error && (
                <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

Input.displayName = "Input";

export default Input;