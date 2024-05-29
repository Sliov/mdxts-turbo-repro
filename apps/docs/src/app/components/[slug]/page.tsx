import { notFound } from 'next/navigation'
import { allComponents } from '../../../../data'
import { ExportedTypes } from 'mdxts/components'

export function generateStaticParams() {
  return (
    allComponents.paths().map((pathname) => ({
      // Use last part of pathname as the slug. Pass `baseDirectory` as an option to `createSource` to remove the source directory from the slug.
      slug: pathname.slice(-1).at(0)
    }))
  )
}

export default async function Page({ params }: { params: { slug: string } }) {
  const component = await allComponents.get(`components/${params.slug}`)

  if (component === undefined) {
    return notFound()
  }

  const { Content, metadata, sourcePath, exportedTypes } = component

  return (
    <>
      {metadata ? (
        <div>
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </div>
      ) : null}

      <>
        {Content && <Content />}

        {JSON.stringify( { exportedTypes})}

        <ExportedTypes source={sourcePath}  />
      </>
    </>
  )
}
