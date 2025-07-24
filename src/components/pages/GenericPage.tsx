import { useParams } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import { menuData } from '../../data/menuData';

export const GenericPage = () => {
  const { category, page } = useParams<{ category: string; page: string }>();
  
  // Find the section and item based on URL params
  const section = menuData.find(s => s.slug === category);
  const item = section?.items.find(i => i.slug === page);
  
  if (!section || !item) {
    return (
      <PageLayout title="Page Not Found" category="Error">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            The page you're looking for doesn't exist.
          </h2>
          <p className="text-gray-500">
            Please check the URL or navigate back to the home page.
          </p>
        </div>
      </PageLayout>
    );
  }

  // Generate content based on the category and item
  const generateContent = () => {
    const categoryLower = section.title.toLowerCase();
    const itemTitle = item.label;
    
    switch (categoryLower) {
      case 'ai':
        return (
          <div className="space-y-6">
            <p>
              Discover our advanced AI solutions in {itemTitle.toLowerCase()}.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>State-of-the-art technology implementation</li>
                <li>Custom solutions tailored to your needs</li>
                <li>Scalable and efficient architecture</li>
                <li>24/7 support and maintenance</li>
              </ul>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="space-y-6">
            <p>
              Professional {itemTitle.toLowerCase()} services designed to accelerate your business growth.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Service Offerings</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Expert consultation and strategy</li>
                <li>Implementation and deployment</li>
                <li>Training and knowledge transfer</li>
                <li>Ongoing support and optimization</li>
              </ul>
            </div>
          </div>
        );
      
      case 'products':
        return (
          <div className="space-y-6">
            <p>
              Explore {itemTitle}, our innovative product solution.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Cutting-edge technology stack</li>
                <li>User-friendly interface design</li>
                <li>Robust security features</li>
                <li>Seamless integration capabilities</li>
              </ul>
            </div>
          </div>
        );
      
      case 'industries':
        return (
          <div className="space-y-6">
            <p>
              Specialized solutions for the {itemTitle.toLowerCase()} industry.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Industry Solutions</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Industry-specific expertise</li>
                <li>Compliance and regulatory support</li>
                <li>Best practices implementation</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        );
      
      case 'about us':
        return (
          <div className="space-y-6">
            <p>
              Learn more about {itemTitle.toLowerCase()} at XCycle.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About This Section</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Our commitment to excellence</li>
                <li>Innovation and creativity</li>
                <li>Client-focused approach</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <p>
              Welcome to our {itemTitle} page.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-gray-700">
                This page is under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <PageLayout title={item.label} category={section.title}>
      {generateContent()}
    </PageLayout>
  );
}; 