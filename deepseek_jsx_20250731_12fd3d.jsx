import { useState } from 'react';

const EXAMPLE_DATA = [
  {
    targetAudience: 'Fitness Coaches',
    topic: 'How to get clients'
  },
  {
    targetAudience: 'Etsy Sellers',
    topic: 'How to make your first sale'
  },
  {
    targetAudience: 'Life Coaches',
    topic: 'Building confidence'
  }
];

const POPULAR_NICHES = [
  'Digital Marketers',
  'Real Estate Agents',
  'Freelance Writers',
  'Online Course Creators'
];

export default function GeneratorForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    targetAudience: '',
    topic: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const loadExample = (example) => {
    setFormData(example);
    onSubmit(example);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Target Audience
            </label>
            <div className="relative">
              <input
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                placeholder="e.g., Fitness Coaches, Etsy Sellers"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <select 
                  className="text-sm bg-gray-100 rounded px-2 py-1 focus:outline-none"
                  onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                  value=""
                >
                  <option value="">Popular niches</option>
                  {POPULAR_NICHES.map((niche, i) => (
                    <option key={i} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Topic
            </label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g., Lead generation, First sale"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : 'Generate Lead Magnet'}
          </button>
          
          <div className="flex flex-wrap gap-2 ml-auto">
            {EXAMPLE_DATA.map((example, i) => (
              <button
                key={i}
                type="button"
                onClick={() => loadExample(example)}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Example #{i+1}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}