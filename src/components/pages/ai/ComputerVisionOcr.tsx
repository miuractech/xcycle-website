import { PageLayout } from '../PageLayout';

export const ComputerVisionOcr = () => {
  return (
    <PageLayout title="Computer Vision, OCR" category="AI">
      <div className="space-y-6">
        <p>
          Advanced computer vision and optical character recognition solutions for modern businesses.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Computer Vision Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Document processing and OCR</li>
            <li>Image classification and recognition</li>
            <li>Object detection and tracking</li>
            <li>Automated quality control systems</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}; 