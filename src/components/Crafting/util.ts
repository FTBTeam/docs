const getNamespace = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[0] : 'vanilla';
}
const getItemName = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[1] : item;
}

export {getNamespace, getItemName};
