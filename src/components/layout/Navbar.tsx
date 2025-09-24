import logo from "@/assets/images/logo.png"
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
type TNavelinks = { label: string, path: string }[]


const Navbar = () => {
      const navlinks: TNavelinks = [
            {
                  label: "Home",
                  path: "/"
            },
            {
                  label: "About",
                  path: "/about"
            },
            {
                  label: "Contact",
                  path: "/contact"
            }
      ]
      return (
            <div>
                  <div className="container mx-auto flex justify-between items-center">

                        <div className=" flex items-center gap-2">
                              <img className=" w-14" src={logo} alt="" />
                              <div className="">
                                    <h2 className="text-2xl font-bold text-accent">Swift Ship</h2>
                                    <p className=" -mt-1 text-sm text-accent flex items-center gap-2">
                                          Fast&secure< IoShieldCheckmarkSharp className=" text-green-500 " />
                                    </p>
                              </div>
                        </div>

                        <ul className=" hidden text-lg gap-4 text-accent md:flex">
                              {
                                    navlinks.map(nav => <NavLink className={({ isActive }) => ` ${isActive && "text-primary"}`} to={nav.path}>{nav.label}</NavLink>)
                              }
                        </ul>

                        <div>
                              <Button className="text-white rounded-none hover:bg-secondary  duration-300    cursor-pointer">New percel</Button>
                        </div>

                  </div>
            </div>
      );
};

export default Navbar;