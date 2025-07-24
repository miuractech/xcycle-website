import { PageLayout } from '../PageLayout';

export const ConversationalNlpRags = () => {
  return (
    <PageLayout title="Conversational, NLP and RAGs" category="AI">
      <div className="space-y-6">
        <p>
          Explore cutting-edge conversational AI, Natural Language Processing, and Retrieval-Augmented Generation systems.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our AI Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advanced conversational AI chatbots</li>
            <li>Natural Language Understanding systems</li>
            <li>Retrieval-Augmented Generation implementations</li>
            <li>Custom AI model training and deployment</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}; 