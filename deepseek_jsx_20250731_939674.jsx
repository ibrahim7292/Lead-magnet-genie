import { useState } from 'react';
import GeneratorForm from './components/GeneratorForm';
import ResultDisplay from './components/ResultDisplay';
import ExportOptions from './components/ExportOptions';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (inputs) => {
    setLoading(true);
    try {
      // In production: fetch from actual backend
      // const res = await fetch('https://your-replit-backend.repl.co/generate', {...})
      
      // For demo: use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockResponses = await import('./data/mockData');
      const response = mockResponses.default.find(r => 
        r.inputs.targetAudience === inputs.targetAudience && 
        r.inputs.topic === inputs.topic
      );
      setResult(response?.output || mockResponses.default[0].output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            🧞‍♂️ Lead Magnet Genie
          </h1>
          <p className="text-gray-600">
            Turn your expertise into lead-generating content in seconds
          </p>
        </header>

        <GeneratorForm 
          onSubmit={handleGenerate} 
          loading={loading} 
        />
        
        {result && (
          <div className="mt-12">
            <ResultDisplay result={result} />
            <ExportOptions content={result} />
          </div>
        )}
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>No login required • All data stays on your device</p>
        </footer>
      </div>
    </div>
  );
}

export default App;