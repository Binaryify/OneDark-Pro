export interface TokenColor {
    name?: string,
    scope: string | string[],
    settings: {
        fontStyle?: string,
        foreground?: string
    }
}