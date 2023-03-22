import { Container } from '../../atoms/Container'
import { LinkButton } from '../../atoms/LinkButton'

export interface IHeroProps {
  imgSrc: string
}

export const Hero = ({ imgSrc }: IHeroProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 h-[80vh]">
      <div className="z-0 min-w-full col-span-1 col-start-1 row-span-1 row-start-1">
        <img
          src={imgSrc}
          alt=""
          className="object-cover h-full min-w-full brightness-90"
        />
      </div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-1">
        <Container className="flex items-center h-full">
          <div className="backdrop-blur-0 ">
            <div className="relative">
              <div className="absolute font-bold translate-x-1 translate-y-1 text-black/10 -z-10 text-7xl">
                Stand out.
              </div>
              <h1 className="font-bold text-white text-7xl">Stand out.</h1>
            </div>
            <LinkButton
              href="/search"
              className="inline-block px-4 py-2 mt-6 text-white bg-black"
            >
              Find ad spaces
            </LinkButton>
          </div>
        </Container>
      </div>
    </div>
  )
}
