import { Navigation } from 'mdxts/components'
import Link from 'next/link'
import { allComponents } from '../../../data'

// The `Navigation` component renders a nested list of links to all components.

export default function Page() {
  console.log({ all: allComponents.paths(), tree: allComponents.tree() })
  return (
    <Navigation
      source={allComponents}
      renderList={(props) => <ul>{props.children}</ul>}
      renderItem={(props) => (
        <li key={props.pathname}>
          <Link href={props.pathname}>{props.label}</Link>
          {props.children}
        </li>
      )}
    />
  )
}

// Alternatively, render the navigation links yourself with the `tree` method:

// function renderLinks(items: ReturnType<typeof allComponents.tree>) {
//   return items.map((item) => (
//     <li key={item.pathname}>
//       <Link href={item.pathname}>{item.label}</Link>
//       {item.children.length ? <ul>{renderLinks(item.children)}</ul> : null}
//     </li>
//   ))
// }

// export default function Page() {
//   return <ul>{renderLinks(allComponents.tree())}</ul>
// }
