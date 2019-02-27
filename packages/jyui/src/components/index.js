const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Button } from './Button';
export { default as CounterButton } from './CounterButton';
export { default as Label } from './Label';
export { default as Placeholder } from './Placeholder';
export { default as PushButton } from './PushButton';
export { default as RandomButton } from './RandomButton';
export { default as WrappedButton } from './WrappedButton';