import { Link } from '@nextui-org/link';

const AuthNav = () => {
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end p-2 rounded-md hover:bg-gray-200">
        <Link
          href="/login"
          className=" text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 "
        >
          Log in
        </Link>
      </div>
    </>
  );
};

export default AuthNav;