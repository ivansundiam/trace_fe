export default defineAppConfig({
  title: 'Trace',
  ui: {
    skeleton: {
      base: 'bg-gray-400'
    },
    input: {
      slots: {
        root: 'relative flex w-full items-center',
        base: 'font-heading bg-gray-100/25 border border-gray-300 rounded-md w-full focus:outline-1 focus:outline-primary placeholder:text-sm disabled:bg-gray-400 disabled:opacity-70'
      },
      variants: {
        size: {
          md: {
            base: 'p-2.5 text-base gap-1.5'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
});