import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  rightSlot?: ReactNode;
}
export const LayoutHeader = (props: Props) => {
  return <div className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-20 border-b-1">
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5">
            <img src={'/images/icon/logo.svg'} className={'w-auto'} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
        </div>
        {props.rightSlot}
      </nav>
    </header>
  </div>
}