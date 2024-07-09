import { NavLink } from '@mantine/core'
import { navItems } from '../utils/nav-items'
import { itemIcon } from '../assets/svgData'

export default function NavContent() {
  return (
    <>
      {navItems.map(item => (
        <div key={item.title}>
          {item.children.length ? (
            <NavLink
              href="#"
              label={item.title}
              leftSection={itemIcon}
              childrenOffset={28}
              c="myColor.0"
            >
              {item.children.map(child => (
                <NavLink
                  key={child.name + item.title}
                  href={`/${item.title}/${child.name}`}
                  label={child.name}
                  c="myColor.0"
                />
              ))}
            </NavLink>
          ) : (
            <NavLink
              href={item.to}
              label={item.title}
              leftSection={itemIcon}
              c="myColor.0"
            />
          )}
        </div>
      ))}
    </>
    // <>
    //   <Divider my="xs" label="Home" labelPosition="center" c="myColor.0" />
    //   <Link
    //     to={'/'}
    //     style={{
    //       textDecoration: 'none',
    //     }}
    //   >
    //     <Text c="myColor.0" size="md">
    //       Home
    //     </Text>
    //   </Link>
    //   <Link
    //     to="/instructions"
    //     style={{
    //       textDecoration: 'none',
    //     }}
    //   >
    //     <Text c="myColor.0" size="md">
    //       Instructions
    //     </Text>
    //   </Link>
    //   {catWithoutSub.map(cat => (
    //     <Link
    //       to={`/${cat}`}
    //       style={{
    //         textDecoration: 'none',
    //       }}
    //     >
    //       <Text c="myColor.0" size="md">
    //         {cat}
    //       </Text>
    //     </Link>
    //   ))}

    //   {navWithSub.map(item => (
    //     <div key={item.title}>
    //       <Divider
    //         my="xs"
    //         label={item.title}
    //         labelPosition="center"
    //         c="myColor.0"
    //       />

    //       {item.children.map(child => (
    //         <Link
    //           key={item.to}
    //           to={`/${item.title}/${child.name}`}
    //           style={{
    //             textDecoration: 'none',
    //           }}
    //         >
    //           <Text c="myColor.0" size="md" ml={2}>
    //             {child.name}
    //           </Text>
    //         </Link>
    //       ))}
    //     </div>
    //   ))}
    // </>
  )
}
