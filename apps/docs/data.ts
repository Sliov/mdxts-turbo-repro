import { createSource } from 'mdxts'

export const allComponents = createSource('src/components/**/*.tsx', {
    baseDirectory: 'src/components',
    basePathname: 'components',
})

// Does not work ?
// export const allComponents = createSource('../../packages/ui/src/**/*.tsx', {
//     baseDirectory: '../../packages/ui/src',
// })
