export function getClassName(componentName: string, styleName: string, className?: string): string {
    return `${componentName} ${styleName} ${className ?? ""}`
}
