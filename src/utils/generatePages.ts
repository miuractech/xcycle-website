import { menuData } from '../data/menuData';

export interface PageData {
  path: string;
  componentName: string;
  title: string;
  category: string;
  filePath: string;
}

export const generatePageData = (): PageData[] => {
  const pages: PageData[] = [];
  
  menuData.forEach(section => {
    section.items.forEach(item => {
      const componentName = item.slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      pages.push({
        path: item.href,
        componentName,
        title: item.label,
        category: section.title,
        filePath: `${section.slug}/${componentName}.tsx`
      });
    });
  });
  
  return pages;
};

export const allPages = generatePageData(); 