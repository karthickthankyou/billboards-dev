import { ReactElement } from 'react'
import { Disclosure } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'

export interface IAccordionProps {
  title: string
  children: ReactElement | ReactElement[]
  className?: string
  defaultOpen?: boolean
}

const Accordion = ({
  title,
  children,
  className,
  defaultOpen = false,
}: IAccordionProps) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={`flex justify-between w-full py-2 font-medium ${className}`}
        >
          <span
            className={`text-left ${
              open ? 'text-primary-600' : 'text-gray-600'
            }`}
          >
            {title}
          </span>
          <IconChevronDown
            className={` ${
              open ? 'transform rotate-180 text-primary-500' : 'text-gray-500'
            } w-5 h-5 `}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="w-full pb-3 pr-12 text-gray-600">
          {children}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default Accordion
