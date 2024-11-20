import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { FaPlus } from 'react-icons/fa';
import Logo from './Logo';

export const Navbar = () => {
  return (
    <header className="max-w-5xl mx-auto mt-4">
      <Card className="p-4 mx-2">
        {/* <CardHeader /> */}
        <CardContent className="flex justify-between p-0 items-center">
          <Link to={'/'}>
            <Logo />
          </Link>

          <div className="flex gap-1">
            <Link to={'/create'} className="">
              <Button className="size-8">
                <FaPlus className="size-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Navbar;
