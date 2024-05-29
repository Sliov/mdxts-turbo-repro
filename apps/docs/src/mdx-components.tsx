import { Button } from '@repo/ui/button';
import { GeistMono } from 'geist/font/mono';
import { MDXComponents } from 'mdxts/components';

export function useMDXComponents() {
  return {
    code: (props) => <MDXComponents.code className={GeistMono.className} {...props} />,
    pre: (props) => (
      <MDXComponents.pre
        className={{
          container: GeistMono.className,
        }}
        style={{
          // Clear the default styles
          container: {
            boxShadow: undefined,
            borderRadius: undefined,
          },
        }}
        {...props}
      />
    ),
    Button
  } satisfies MDXComponents;
}
