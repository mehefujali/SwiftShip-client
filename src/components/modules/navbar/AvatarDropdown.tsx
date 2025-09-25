import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import { ModeToggle } from '@/components/ui/ModeToggoler';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const AvatarDropdown = () => {
      const [position, setPosition] = React.useState("bottom")
      return (
            <div>
                  <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                              <Button className=' rounded-full'><FaRegUser /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>Menu</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

                                    {/* <DropdownMenuItem><ModeToggle /></DropdownMenuItem> */}
                                    <DropdownMenuItem>Sign In</DropdownMenuItem>
                                    <DropdownMenuItem className=' text-red-500'>Log out</DropdownMenuItem>


                              </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                  </DropdownMenu>
            </div>
      );
};

export default AvatarDropdown;