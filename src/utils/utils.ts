export function buildClassName(...classNames: any[]): string {
    return (classNames || []).filter(name => !!name).join(" ")
}
