import { PageLayout } from '../PageLayout';

export const CustomerServiceSalesAutomation = () => {
  return (
    <PageLayout title="Customer Service & Sales Automation" category="AI">
      <div className="space-y-6">
        <p>
          Automate and enhance your customer service and sales processes with AI-powered solutions.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Automation Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Intelligent customer support chatbots</li>
            <li>Automated sales funnel optimization</li>
            <li>Lead scoring and qualification systems</li>
            <li>Customer sentiment analysis</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}; 