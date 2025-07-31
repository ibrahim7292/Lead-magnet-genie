export default function ResultDisplay({ result }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {result.leadMagnetIdea}
        </h2>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Ready to Use
          </span>
          <span className="mx-2">•</span>
          <span>For: {result.targetAudience}</span>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Lead Magnet Content</h3>
          <div className="prose max-w-none bg-gray-50 p-6 rounded-lg">
            {result.content}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Landing Page</h3>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{result.productPage.headline}</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-700 mb-2">Key Benefits:</h5>
                <ul className="space-y-1">
                  {result.productPage.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-700 mb-2">What You'll Get:</h5>
                <ul className="space-y-1 pl-5 list-disc">
                  {result.productPage.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                {result.productPage.cta}
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Opt-in Email</h3>
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="mb-4">
                <p className="text-gray-700 mb-3">{result.optInEmailPitch}</p>
                <div className="flex items-center mt-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Your Lead Magnet</div>
                    <div className="text-sm text-gray-500">Instant download</div>
                  </div>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}