export interface TokenColor {
    name?: string,
    scope: string | string[],
    settings: {
        foreground?: string,
        fontStyle?: string
    }
}