export function toHyphenCase(str) {
    return str
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-zA-Z0-9-]/g, "") // Remove non-alphanumeric characters (except hyphens)
        .toLowerCase(); // Convert to lowercase
}

export function hyphenCaseToCapitalized(str) {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
