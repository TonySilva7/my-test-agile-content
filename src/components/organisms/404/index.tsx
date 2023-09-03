import { Home } from 'lucide-react';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

type NotFoundProps = ComponentProps<'div'>;

function NotFound({ ...props }: NotFoundProps) {
  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-center"
      {...props}
    >
      <h1 className=" text-lg font-bold text-zinc-700">404 - Page Not Found</h1>

      <p> Sorry, but the page you were trying to view does not exist.</p>

      <button className="mt-6 flex items-center justify-center gap-1 rounded bg-zinc-200 px-4 py-2">
        <Home size={18} stroke="#555" />
        <Link to="/"> Go to Home </Link>
      </button>
    </main>
  );
}

export { NotFound, type NotFoundProps };
