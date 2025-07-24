import { PageLayout } from '../PageLayout';

export const Ethics = () => {
  return (
    <PageLayout title="Ethics" category="AI">
      <div className="space-y-6">
        <p>
          Ensuring responsible AI development and deployment with strong ethical foundations.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ethical AI Principles</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Transparent and explainable AI systems</li>
            <li>Bias detection and mitigation strategies</li>
            <li>Privacy-preserving AI implementations</li>
            <li>Responsible AI governance frameworks</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}; 