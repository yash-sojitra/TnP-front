import { Button } from "@/shadcn/components/ui/button";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({shownav, setshowNav}) => {
  const location = useLocation();

  if(location.pathname.includes("/error")) {
    setshowNav(false)
  }
  return (
    <>
      {shownav && <div className="flex w-full justify-center">
        {/* create Nav here */}
          <Button>Navbar Here</Button>
      </div>}
    </>
  )
}

export default Navbar;