export function getClassName(...classNames: any[]): string {
    return (classNames || []).filter(name => !!name).join(" ")
}
