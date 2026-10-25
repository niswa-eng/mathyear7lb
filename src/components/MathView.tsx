/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math?: string;
  display?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math = '', display = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math, display]);

  return (
    <span
      className={`inline-block select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface FormattedMathTextProps {
  text: string;
  className?: string;
}

/**
 * Parses text containing inline $math$ and $$math$$ and renders with KaTeX.
 */
export const FormattedMathText: React.FC<FormattedMathTextProps> = ({ text, className = '' }) => {
  const renderedParts = useMemo(() => {
    if (!text) return null;

    // Split by $$...$$ first, then $...$
    const parts: React.ReactNode[] = [];
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const matchedStr = match[0];
      const isDisplay = matchedStr.startsWith('$$');
      const formula = isDisplay
        ? matchedStr.slice(2, -2).trim()
        : matchedStr.slice(1, -1).trim();

      try {
        const html = katex.renderToString(formula, {
          displayMode: isDisplay,
          throwOnError: false,
        });
        parts.push(
          <span
            key={match.index}
            className={`${isDisplay ? 'block my-2 text-center' : 'inline-block px-0.5'} select-text font-serif`}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        parts.push(matchedStr);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  }, [text]);

  return <span className={`select-text leading-relaxed ${className}`}>{renderedParts}</span>;
};
