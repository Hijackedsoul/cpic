
import { useEffect, useState } from 'react';

interface CodeSnippet {
  id: number;
  content: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
}

const codeSnippets = [
  'int main() { ... }',
  'vector<int> v;',
  'for (int i = 0; i < n; i++)',
  'priority_queue<int> pq;',
  'map<string, int> mp;',
  'sort(begin(v), end(v));',
  'return dp[n][m];',
  'while (!q.empty())',
  'class Solution { ... }',
  'if (left <= right)',
  '#include <bits/stdc++.h>',
  'int arr[MAX_N];'
];

const FloatingCodeSnippets = () => {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  
  useEffect(() => {
    // Initialize snippets
    const initialSnippets = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      content: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 80 + 10, // 10-90% of screen width
      y: Math.random() * -100, // Start above the screen
      opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7 opacity
      speed: Math.random() * 0.5 + 0.5 // Different speeds
    }));
    
    setSnippets(initialSnippets);
    
    const interval = setInterval(() => {
      setSnippets(prevSnippets => 
        prevSnippets.map(snippet => {
          // Move snippet down
          let newY = snippet.y + snippet.speed;
          
          // If snippet is out of view, reset it to the top with new properties
          if (newY > 100) {
            return {
              ...snippet,
              content: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
              x: Math.random() * 80 + 10,
              y: Math.random() * -20 - 10, // Start a bit above the screen
              opacity: Math.random() * 0.5 + 0.2
            };
          }
          
          return { ...snippet, y: newY };
        })
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {snippets.map(snippet => (
        <div 
          key={snippet.id}
          className="absolute font-mono text-sm text-neon-cyan whitespace-nowrap"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            opacity: snippet.opacity,
            transform: 'translateZ(0)', // For better performance
          }}
        >
          {snippet.content}
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeSnippets;
