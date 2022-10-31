interface Props {
  children: React.ReactNode
  title?: string
}

const GeneralLayout = ({ children, title }: Props) => {
  return (
    <main>
      <h1>{title}</h1>

      {children}
    </main>
  )
}

export default GeneralLayout
