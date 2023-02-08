import { useRouter } from "next/router";

import Link from 'next/link'

// function ActiveLink({ children: any, href: any }) {
//   const router = useRouter();
//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? "red" : "black",
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     router.push(href);
//   };

//   return (
//     <a href={href} onClick={handleClick} style={style}>
//       {children}
//     </a>
//   );
// }

// export default ActiveLink;


export default ActiveLink (...ctx: any) {
    
      const handleClick = (e) => {
        e.preventDefault();
        router.push(ctx.href);
    };
    return <a {...ctx} />
}
