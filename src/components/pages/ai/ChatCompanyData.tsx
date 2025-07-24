import { PageLayout } from '../PageLayout';

export const ChatCompanyData = () => {
  return (
    <PageLayout title="Chat with your Company Data" category="AI">
      <div className="space-y-6">
        <p>
          Enable intelligent conversations with your company's data through advanced AI-powered chat interfaces.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Data Chat Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Natural language data querying</li>
            <li>Intelligent document search and retrieval</li>
            <li>Real-time data insights through conversation</li>
            <li>Secure enterprise data integration</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}; 