import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  const navitems = [
    {
      name: "cerimonia",
      href: "/",
    },
    {
      name: "location",
      href: "#",
    },
    {
      name: "partecipazione",
      href: "#",
    },
    {
      name: "lista nozze",
      href: "#",
    },
  ];

  return (
    <div className="bg-teal-800 flex justify-center px-4">
        <NavigationMenu>
            <NavigationMenuList>
                {navitems.map((item) => (
                <NavigationMenuItem key={item.name} className={"text-white uppercase hover:text-orange-300 py-2 px-4 font-semibold"}>
                    <NavigationMenuLink>{item.name}</NavigationMenuLink>
                </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}
