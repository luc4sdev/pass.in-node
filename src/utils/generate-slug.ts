export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Normaliza os caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres acentuados normalizados
        .toLowerCase() // Converte para minúsculas
        .replace(/[^\w\s-]/g, "") // Remove caracteres que não são letras, números, espaços ou hífens
        .replace(/\s+/g, "-") // Substitui espaços por hífens
        .replace(/--+/g, "-") // Remove múltiplos hífens consecutivos
        .replace(/^-+/, "") // Remove hífens no início
        .replace(/-+$/, ""); // Remove hífens no final
}

