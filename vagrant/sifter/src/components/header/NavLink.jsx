import Link from "next/link"

export default function NavLink(props) {
  return (
    <Link href={props.href}>
    {props.children}
    </Link>
  )
}