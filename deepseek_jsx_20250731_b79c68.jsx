import { useState } from 'react';

export default function ExportOptions({ content }) {
  const [copied, setCopied] = useState('');
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };
  
  const generateHtmlTemplate = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.leadMagnetIdea}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="max-w-4xl mx-auto p-6">
    <!-- Landing page HTML would go here -->
  </div>
</body>
</html>`;
  };
  
  const generateNotionEmbed = () => {
    return `<div class="notion-embed-container" style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe src="https://notion.site/embed/${btoa(content.leadMagnetIdea)}" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>`;
  };
  
  const exportOptions = [
    {
      name: 'Copy as Text',
      action: () => copyToClipboard(JSON.stringify(content, null, 2), 'text')
    },
    {
      name: 'Notion Embed',
      action: () => copyToClipboard(generateNotionEmbed(), 'notion')
    },
    {
      name: 'Download HTML',
      action: () => {
        const blob = new Blob([generateHtmlTemplate()], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lead-magnet.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Export Options</h3>
      <div className="flex flex-wrap gap-3">
        {exportOptions.map((option, i) => (
          <button
            key={i}
            onClick={option.action}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center"
          >
            {option.name}
            {copied === option.name.toLowerCase().replace(' ', '-') && (
              <span className="ml-2 text-green-600 text-sm">✓ Copied!</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}