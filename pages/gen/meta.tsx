import { NextSeo } from 'next-seo'
const Metatags = ({title , desc } : any) => {
  return (
    <NextSeo
      title={title}
      description={desc ? desc : ""}
    />
  )
}

export default Metatags