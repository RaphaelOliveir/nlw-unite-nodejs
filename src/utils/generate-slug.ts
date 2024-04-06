export function slugify(text: string): string {
    text = text.normalize('NFD');
     
    text = text.replace(/[\u0300-\u036f]/g, '');
     
    text = text.toLowerCase();
     
    text = text.trim();
     
    text = text.replace(/\s+/g, '-');
     
    text = text.replace(/[^a-z0-9-]/g, '');
     
    text = text.replace(/-+/g, '-');
     
    return text;
   }
   