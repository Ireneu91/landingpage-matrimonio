import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const navitems = [
    {
      name: "Home",
      href: "/",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navitems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href={item.href}>
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
